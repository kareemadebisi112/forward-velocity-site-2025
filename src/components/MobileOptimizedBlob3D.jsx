import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MobileOptimizedBlob3D = ({ size = 340 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mobile-optimized renderer settings
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable antialiasing for performance
      powerPreference: "low-power", // Use low-power GPU
      alpha: true,
      precision: "lowp", // Use low precision
    });
    
    // Reduce size and pixel ratio for mobile
    const mobileSize = Math.min(size, 250);
    renderer.setSize(mobileSize, mobileSize);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio
    
    // Disable expensive features
    renderer.shadowMap.enabled = false;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    // Performance optimizations
    renderer.info.autoReset = false;
    renderer.sortObjects = false;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50); // Reduced far plane
    camera.position.set(0, 0, 5);

    // Simplified lighting (no controls needed for mobile)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(-3, 5, 3);
    scene.add(keyLight);

    // Simplified blob material
    const blobMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.8,
    });

    // Create simplified blob geometry with fewer segments
    const createSimpleBlobGeometry = () => {
      const geometry = new THREE.SphereGeometry(1.2, 16, 12); // Reduced segments
      const positionAttribute = geometry.attributes.position;
      
      // Simple noise deformation
      for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3().fromBufferAttribute(positionAttribute, i);
        const noise = Math.sin(vertex.x * 2) * Math.cos(vertex.y * 2) * Math.sin(vertex.z * 2);
        vertex.multiplyScalar(1 + noise * 0.1);
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      
      geometry.computeVertexNormals();
      return geometry;
    };

    const blobGeometry = createSimpleBlobGeometry();
    const blob = new THREE.Mesh(blobGeometry, blobMat);
    scene.add(blob);

    // Reduced frame rate for mobile
    let lastTime = 0;
    const targetFPS = 30; // Target 30 FPS instead of 60
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        // Simple rotation animation
        blob.rotation.y += 0.005;
        blob.rotation.x += 0.002;
        
        renderer.render(scene, camera);
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      const newSize = Math.min(container.clientWidth, container.clientHeight, 250);
      renderer.setSize(newSize, newSize);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      blobGeometry.dispose();
      blobMat.dispose();
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      style={{
        width: Math.min(size, 250),
        height: Math.min(size, 250),
        margin: "0 auto",
      }}
    />
  );
};

export default MobileOptimizedBlob3D;
