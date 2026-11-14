import React, { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function SOMMesh({ modelUrl }) {
  const { scene } = useGLTF(modelUrl);

  const centeredScene = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const center = new THREE.Vector3();
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const radius = sphere.radius || 1;
    const scaleFactor = 0.95 / radius;

    box.getCenter(center);
    cloned.scale.setScalar(scaleFactor);
    cloned.position.set(
      -center.x * scaleFactor,
      -center.y * scaleFactor,
      -center.z * scaleFactor
    );
    cloned.rotation.set(0, 0, 0);
    cloned.updateMatrixWorld(true);

    return cloned;
  }, [scene]);

  const isSom = Boolean(modelUrl && modelUrl.toLowerCase().includes('som'));

  return (
    <group rotation={isSom ? [0, 0, Math.PI] : [0, 0, 0]}>
      <primitive object={centeredScene} />
    </group>
  );
}

class ViewerErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/**
 * Interactive 3D SOM Viewer with default Y-axis rotation,
 * mouse drag rotation, and zoom disabled.
 */
export default function SOM3DViewer({
  modelUrl = '/models/SOM.glb',
  fallbackSrc,
  fallbackAlt = 'RZ/G2L SMARC SoM 3D Model',
}) {
  const controlsRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const handleInteractionStart = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    setAutoRotate(false);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      setAutoRotate(true);
    }, 1500);
  };

  const fallbackImage = fallbackSrc ? (
    <img
      src={fallbackSrc}
      alt={fallbackAlt}
      className="max-h-full max-w-full object-contain"
    />
  ) : null;

  return (
    <ViewerErrorBoundary fallback={fallbackImage}>
      <div
        className="w-full h-full relative select-none"
        title="Drag to rotate 3D SMARC SoM"
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#52627C] dark:text-[#AAB6D0]">
              Loading 3D SOM...
            </div>
          }
        >
          <Canvas
            camera={{ position: [1.22, 1.3, 1.98], fov: 36, near: 0.05, far: 100 }}
            dpr={[1, 2]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 7, 6]} intensity={2.2} color="#ffffff" />
            <directionalLight position={[-5, -4, -6]} intensity={1.1} color="#cbd5e1" />
            <directionalLight position={[0, 8, 2]} intensity={1.2} color="#ffffff" />
            <directionalLight position={[0, -8, 2]} intensity={0.8} color="#cbd5e1" />
            <pointLight position={[-4, 2, 4]} intensity={1.4} color="#42D9F5" distance={15} decay={2} />
            <pointLight position={[4, -2, 4]} intensity={1.2} color="#3478F6" distance={12} decay={2} />
            <hemisphereLight args={['#e0f2fe', '#0f172a', 0.85]} />

            <SOMMesh modelUrl={modelUrl} />

            <OrbitControls
              ref={controlsRef}
              makeDefault
              autoRotate={autoRotate}
              autoRotateSpeed={1.4}
              enableRotate={true}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={0.08}
              maxPolarAngle={Math.PI - 0.08}
              enableDamping={true}
              dampingFactor={0.06}
              onStart={handleInteractionStart}
              onEnd={handleInteractionEnd}
            />
          </Canvas>
        </Suspense>
      </div>
    </ViewerErrorBoundary>
  );
}
