import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Code2, 
  BookOpen, 
  Layers, 
  ExternalLink, 
  Cpu, 
  Sparkles,
  GitBranch,
  Play
} from 'lucide-react';


/**
 * Simple syntax highlighter helper for light developer interface
 */
function renderHighlightedCode(code) {
  const lines = code.split('\n');
  return lines.map((line, lineIdx) => {
    // Check if line is comment
    const trimmed = line.trim();
    if (trimmed.startsWith('#') || trimmed.startsWith('//')) {
      return (
        <div key={lineIdx} className="text-white/40 italic font-mono">
          {line}
        </div>
      );
    }

    // Tokenize line into strings, keywords, and code
    const tokens = [];
    const regex = /("[^"]*"|'[^']*'|\b(?:import|from|def|return|for|in|int|auto|main|let|fn|use|pub|struct|true|false|print|std|cout)\b|[a-zA-Z0-9_]+|[^\s\w]+|\s+)/g;
    let match;

    while ((match = regex.exec(line)) !== null) {
      const token = match[0];
      if (token.startsWith('"') || token.startsWith("'")) {
        tokens.push(
          <span key={match.index} className="text-emerald-400 font-medium">
            {token}
          </span>
        );
      } else if (
        /^(import|from|def|return|for|in|int|auto|main|let|fn|use|pub|struct|true|false)$/.test(token)
      ) {
        tokens.push(
          <span key={match.index} className="text-[#42D9F5] font-bold">
            {token}
          </span>
        );
      } else if (/^(aiegx|cv2|device|engine|cap|result|ctx|model|dev|Node)$/.test(token)) {
        tokens.push(
          <span key={match.index} className="text-[#3478F6] font-semibold">
            {token}
          </span>
        );
      } else if (/^[0-9]+(\.[0-9]+)?$/.test(token)) {
        tokens.push(
          <span key={match.index} className="text-cyan-300 font-semibold">
            {token}
          </span>
        );
      } else {
        tokens.push(
          <span key={match.index} className="text-white/90">
            {token}
          </span>
        );
      }
    }

    return (
      <div key={lineIdx} className="font-mono leading-relaxed whitespace-pre">
        {tokens.length > 0 ? tokens : line}
      </div>
    );
  });
}

export default function Developers() {
  const [activeLang, setActiveLang] = useState('python');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    python: `import aiegx
import cv2

# Initialize on-chip neural processor
device = aiegx.Device(device_id=0, target="neurocore_x1")
print(f"Connected to {device.name} | Firmware: {device.firmware_version}")

# Load quantized edge model directly to on-die SRAM
engine = device.load_model(
    model_path="./models/yolov11_edge.axmodel", 
    precision=aiegx.Precision.INT8,
    dma_accelerated=True
)

# Zero-copy camera frame capture & hardware inference
cap = aiegx.CameraStream(source="/dev/video0", fps=60)
for frame in cap:
    # 0.38ms average inference latency directly in silicon
    detections = engine.infer(frame, conf_threshold=0.85)
    for obj in detections:
        print(f"Detected: {obj.label} ({obj.confidence:.2f}) at [{obj.bbox}]")`,
    
    cpp: `#include <aiegx/core.hpp>
#include <aiegx/vision.hpp>
#include <iostream>

int main() {
    // Acquire hardware context
    auto ctx = aiegx::CreateContext(aiegx::DeviceTarget::NEUROCORE_X1);
    
    // Allocate contiguous physical memory for DMA tensor transfer
    aiegx::TensorInput input_buffer(ctx, {1, 3, 640, 640}, aiegx::DataType::UINT8);
    auto model = ctx->LoadModel("models/yolov11_edge.axmodel");
    
    // Execute deterministic sub-millisecond hardware inference
    aiegx::InferenceResult result = model->Execute(input_buffer);
    std::cout << "Inference completed in: " << result.LatencyMs() << " ms\\n";
    return 0;
}`,

    rust: `use aiegx_sys::{Device, Model, Precision, Tensor};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let dev = Device::open(0)?;
    println!("Aiegx silicon initialized: {}", dev.chip_signature()?);

    let model = Model::load_from_path(
        &dev, 
        "models/yolov11_edge.axmodel", 
        Precision::Int8
    )?;

    let input = Tensor::from_mipi_buffer(&dev, 0)?;
    let output = model.run_deterministic(&input)?;
    
    println!("Bounding boxes computed: {:?}", output.bboxes());
    Ok(())
}`,

    ros2: `# ROS 2 Bringup Launch File for Aiegx Hardware Node
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='aiegx_neural_ros',
            executable='aiegx_perception_node',
            name='edge_npu_tracker',
            parameters=[{
                'device_id': 0,
                'model_file': 'models/yolov11_edge.axmodel',
                'enable_dma_zero_copy': True,
                'target_framerate': 60,
                'publish_bounding_boxes': True,
                'publish_depth_mask': True
            }]
        )
    ])`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modelZoo = [
    { name: 'YOLOv11-Edge', latency: '0.38 ms', memory: '14.2 MB', accuracy: '91.4% mAP' },
    { name: 'Whisper-Tiny-Edge', latency: '2.1 ms/chunk', memory: '38.0 MB', accuracy: '94.2% WER' },
    { name: 'Depth-Anything-Lite', latency: '1.2 ms', memory: '24.8 MB', accuracy: 'Metric Depth' },
    { name: 'Llama-Edge-1B (INT4)', latency: '35 tokens/s', memory: '580 MB', accuracy: 'Quantized LLM' }
  ];

  return (
    <section id="developers" className="py-24 sm:py-32 relative bg-[#101936] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17264D] border border-white/10 text-xs font-mono text-[#42D9F5] uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Developer First Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Seamless SDK & <span className="bg-gradient-to-r from-[#42D9F5] to-[#3478F6] bg-clip-text text-transparent">Model Compilation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F5F7FC]/70">
            Write your models in PyTorch, TensorFlow, or ONNX. Convert with one CLI command and deploy with Python, C++, Rust, or ROS2.
          </p>
        </div>

        {/* Code Terminal & SDK Preview */}
        <div className="rounded-3xl bg-[#0a1024] border border-white/10 shadow-2xl overflow-hidden mb-16 backdrop-blur-md">
          
          {/* Terminal Window Header */}
          <div className="px-5 py-4 bg-[#101936] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-white/50 ml-2">aiegx-sdk-runtime // live demo</span>
            </div>

            {/* Language Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0a1024] border border-white/10 shadow-sm">
              {[
                { id: 'python', label: 'Python' },
                { id: 'cpp', label: 'C++' },
                { id: 'rust', label: 'Rust' },
                { id: 'ros2', label: 'ROS2' }
              ].map(lang => (
                <button
                  key={lang.id}
                  onClick={() => setActiveLang(lang.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    activeLang === lang.id
                      ? 'bg-[#42D9F5] text-[#101936] font-bold shadow-sm'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#42D9F5]" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Snippet'}</span>
            </button>
          </div>

          {/* Terminal Body with Dark Theme & Syntax Highlighting */}
          <div className="p-6 bg-[#0a1024] border-b border-white/10 overflow-x-auto text-xs sm:text-sm">
            {renderHighlightedCode(codeSnippets[activeLang])}
          </div>

          {/* Terminal Footer with CLI Quickstart */}
          <div className="px-6 py-4 bg-[#101936] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-white/50">Quick Install:</span>
              <code className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#0a1024] border border-white/10 text-emerald-300 shadow-sm">
                pip install aiegx-core && aiegx-cli check-hardware
              </code>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Zero external dependencies
              </span>
            </div>
          </div>

        </div>

        {/* Model Zoo & Developer Quick Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pre-Quantized Model Zoo (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#17264D]/50 border border-white/10 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Pre-Compiled Neural Model Zoo</h3>
                <p className="text-xs text-white/60">Optimized out of the box for Aiegx hardware kernels</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#101936] text-[#42D9F5] border border-white/10 font-semibold">
                INT8 Ready
              </span>
            </div>

            <div className="space-y-3">
              {modelZoo.map((model, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-[#101936]/80 border border-white/5 hover:border-[#42D9F5]/40 flex flex-wrap items-center justify-between gap-3 transition-colors shadow-sm"
                >
                  <div>
                    <h4 className="text-sm font-bold font-mono text-white">{model.name}</h4>
                    <span className="text-xs text-white/60">{model.accuracy}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-white/50 block">Hardware Latency</span>
                      <span className="text-[#42D9F5] font-bold">{model.latency}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/50 block">SRAM Footprint</span>
                      <span className="text-white/90 font-semibold">{model.memory}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dev Resources & Community (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#17264D]/50 border border-white/10 hover:border-[#42D9F5]/40 block transition-all group shadow-sm hover:shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-[#101936] text-white border border-white/10">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#42D9F5] transition-colors" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-[#42D9F5] transition-colors">Open Source Repositories & SDK</h4>
              <p className="text-xs text-white/60 mt-1">Explore device trees, kernel drivers, Python SDK, and ROS2 packages on GitHub.</p>
            </a>

            <div className="p-6 rounded-3xl bg-[#17264D]/50 border border-white/10 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-[#101936] text-[#42D9F5] border border-white/10">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">v4.2.0 Docs</span>
              </div>
              <h4 className="text-base font-bold text-white">Comprehensive API Documentation</h4>
              <p className="text-xs text-white/60 mt-1">Full C++ & Python reference manuals, hardware timing diagrams, and DMA memory layouts.</p>
              <a href="#products" className="inline-block mt-3 text-xs font-semibold text-[#42D9F5] hover:underline">
                Read Hardware API Manual &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
