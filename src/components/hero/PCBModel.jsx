import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, RefreshCw, AlertCircle } from 'lucide-react';

// URL for the 3D PCB Model in the public directory
const MODEL_URL = '/models/PCB_3D_Model.glb';

/**
 * 3D SBC Model Component
 * Preserves the original GLB geometry, components, green PCB color, and materials.
 * Automatically computes bounding box via Box3 & Vector3, centers geometry at (0, 0, 0),
 * and calculates optimal camera distance accounting for FOV and aspect ratio with 15% visual padding.
 */
function Model({ controlsRef }) {
  const { scene } = useGLTF(MODEL_URL);
  const { camera, size } = useThree();
  const isInitialized = useRef(false);

  // 1. Calculate bounding box using Three.js Box3 and Vector3 & center model at (0, 0, 0)
  const { centeredScene, bounds } = useMemo(() => {
    // Clone scene to preserve clean original GLTF
    const cloned = scene.clone(true);

    // Compute bounding box using Box3 and Vector3
    const box = new THREE.Box3().setFromObject(cloned);
    const modelSize = new THREE.Vector3();
    const modelCenter = new THREE.Vector3();
    box.getSize(modelSize);
    box.getCenter(modelCenter);

    // Position model center exactly at origin (0, 0, 0)
    cloned.position.set(-modelCenter.x, -modelCenter.y, -modelCenter.z);
    cloned.updateMatrixWorld(true);

    // Recompute centered bounding box and bounding sphere
    const centeredBox = new THREE.Box3().setFromObject(cloned);
    const sphere = centeredBox.getBoundingSphere(new THREE.Sphere());

    return {
      centeredScene: cloned,
      bounds: {
        box: centeredBox,
        size: modelSize,
        center: modelCenter,
        radius: sphere.radius,
      },
    };
  }, [scene]);

  // 2. Automatically fit camera distance & frustum based on bounding dimensions, FOV, and canvas aspect ratio
  useEffect(() => {
    if (!bounds || !camera || !size.height) return;

    const { radius } = bounds;
    const fov = camera.fov || 42;
    const fovRad = THREE.MathUtils.degToRad(fov);
    const aspect = size.width / Math.max(size.height, 1);

    // Vertical distance needed to fit bounding sphere
    const distV = radius / Math.sin(fovRad / 2);

    // Horizontal distance needed to fit bounding sphere accounting for canvas aspect ratio
    const hFovHalf = Math.atan(aspect * Math.tan(fovRad / 2));
    const distH = radius / Math.sin(hFovHalf);

    // Generous padding factor (1.45) guarantees comfortable breathing room (~22% clear margin)
    // on all sides so the board, all top/bottom edge connectors, and pins are completely visible
    // and never clipped by the canvas viewport boundary during the entire 360° rotation.
    const paddingFactor = 1.45;
    const requiredDistance = Math.max(distV, distH) * paddingFactor;

    // Natural 3/4 isometric perspective direction vector:
    // Azimuth ~37°, elevation ~24° — showcases front face, top edge, and side ports simultaneously
    const threeQuarterDir = new THREE.Vector3(0.56, 0.40, 0.72).normalize();

    if (!isInitialized.current) {
      // Initial mount: set camera to the natural 3/4 angle
      camera.position.set(
        threeQuarterDir.x * requiredDistance,
        threeQuarterDir.y * requiredDistance,
        threeQuarterDir.z * requiredDistance
      );
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      isInitialized.current = true;
    } else {
      // On canvas resize: maintain current orbit direction but scale distance to avoid clipping
      const currentDir = camera.position.clone().normalize();
      const dir = currentDir.lengthSq() > 0.05 ? currentDir : threeQuarterDir;
      camera.position.set(
        dir.x * requiredDistance,
        dir.y * requiredDistance,
        dir.z * requiredDistance
      );
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }

    // Configure OrbitControls boundaries relative to required camera distance
    if (controlsRef?.current) {
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.minDistance = requiredDistance * 0.65;
      controlsRef.current.maxDistance = requiredDistance * 2.2;
      controlsRef.current.update();
    }
  }, [bounds, camera, size.width, size.height, controlsRef]);

  return <primitive object={centeredScene} />;
}

// Preload the GLB model for instant loading
useGLTF.preload(MODEL_URL);

/**
 * Loading Fallback displayed while model assets stream in
 */
function ModelLoadingFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent text-center p-6 select-none z-10">
      {/* Outer pulsing ring */}
      <div className="relative flex items-center justify-center mb-5">
        <div className="w-20 h-20 rounded-full border-2 border-[#42D9F5]/30 border-t-[#3478F6] animate-spin" />
        <div className="absolute w-12 h-12 rounded-full border border-[#3478F6]/30 border-b-[#42D9F5] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
        <div className="absolute p-2.5 rounded-full bg-[#17264D]/90 border border-white/10 text-[#42D9F5] shadow-lg shadow-black/40">
          <Cpu className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#42D9F5] animate-ping" />
        <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
          Initializing 3D Silicon Core
        </span>
      </div>

      <p className="text-[11px] font-mono text-white/60 max-w-[220px]">
        Loading PCB geometry &amp; materials...
      </p>

      {/* Cyber progress indicator bar */}
      <div className="w-36 h-1 mt-4 bg-[#17264D] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#42D9F5] to-[#3478F6] rounded-full animate-pulse w-3/4" />
      </div>
    </div>
  );
}

/**
 * Error Boundary to catch any 3D/WebGL rendering exceptions gracefully
 */
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D PCB Model rendering error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#101936]/95 rounded-2xl border border-white/10 text-center p-6 z-10 shadow-lg">
          <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 mb-3 shadow-lg shadow-red-500/10">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="text-xs font-mono font-bold text-white mb-1 uppercase tracking-wider">
            3D Hardware Canvas Error
          </h4>
          <p className="text-[11px] text-white/60 max-w-[220px] mb-4">
            Unable to initialize WebGL context or load the PCB 3D model.
          </p>
          <button
            onClick={this.handleRetry}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#42D9F5] bg-[#17264D] border border-white/10 hover:bg-[#17264D]/80 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Model</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * PCBModel - Main interactive 3D Hero Component
 * Renders the actual PCB GLB model with Three.js / React Three Fiber.
 */
export default function PCBModel() {
  const controlsRef = useRef(null);

  return (
    <div className="relative w-full h-full bg-transparent select-none">
      {/* Interactive 3D Canvas */}
      <ModelErrorBoundary>
        <Suspense fallback={<ModelLoadingFallback />}>
          <Canvas
            camera={{ position: [2.6, 1.8, 3.4], fov: 42, near: 0.1, far: 100 }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Soft Ambient Light for balanced overall visibility */}
            <ambientLight intensity={1.2} />

            {/* Main Key Directional Light to cast clear form-defining shadows */}
            <directionalLight 
              position={[5, 8, 5]} 
              intensity={2.0} 
              color="#ffffff" 
            />

            {/* Back Fill Directional Light to illuminate connectors & underside */}
            <directionalLight 
              position={[-5, -3, -5]} 
              intensity={0.8} 
              color="#b0c4de" 
            />

            {/* Subtle Cyan Accent Light reflecting futuristic Aiegx brand identity */}
            <pointLight 
              position={[-3.5, 3.0, 3.5]} 
              intensity={2.5} 
              color="#42D9F5" 
              distance={15} 
              decay={2}
            />

            {/* Subtle Deep Blue Fill Point Light for cyber-metallic contrast */}
            <pointLight 
              position={[3.5, -2, 3.5]} 
              intensity={2.0} 
              color="#3478F6" 
              distance={12} 
              decay={2}
            />

            {/* Top Rim Light for edge definition */}
            <pointLight 
              position={[0, 5, -2]} 
              intensity={1.2} 
              color="#42D9F5" 
              distance={10} 
              decay={2}
            />

            {/* Sky / Ground hemisphere bounce tuned for dark navy background */}
            <hemisphereLight 
              args={['#e0f2fe', '#0b1329', 0.7]} 
            />

            {/* The 3D Model with dynamic bounding-box auto-fitting & camera distance calculation */}
            <Model controlsRef={controlsRef} />

            {/* Orbit Controls with gentle continuous auto-rotation & natural boundaries */}
            <OrbitControls
              ref={controlsRef}
              makeDefault
              autoRotate={true}
              autoRotateSpeed={1.2}
              enablePan={false}
              enableZoom={true}
              minPolarAngle={Math.PI / 4.5}
              maxPolarAngle={Math.PI / 1.85}
              enableDamping={true}
              dampingFactor={0.06}
            />
          </Canvas>
        </Suspense>
      </ModelErrorBoundary>
    </div>
  );
}
