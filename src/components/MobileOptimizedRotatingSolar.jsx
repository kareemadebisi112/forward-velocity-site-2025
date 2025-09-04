import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const MobileOptimizedRotatingSolar = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mobile-optimized renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable antialiasing
      powerPreference: "low-power",
      alpha: true,
      precision: "lowp",
    });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
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
    const camera = new THREE.PerspectiveCamera(
      25, // Reduced FOV
      container.clientWidth / container.clientHeight,
      1,
      100 // Reduced far plane
    );
    camera.position.set(0, 6, 40); // Closer camera

    // Simplified lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create simplified solar system with fewer objects
    const solarGroup = new THREE.Group();
    scene.add(solarGroup);

    // Simplified materials
    const createSimpleMaterial = (color, emissive = 0x000000) => {
      return new THREE.MeshBasicMaterial({
        color: color,
        emissive: emissive,
      });
    };

    // Central sun (simplified)
    const sunGeometry = new THREE.SphereGeometry(1.5, 16, 12); // Reduced segments
    const sunMaterial = createSimpleMaterial(0xfdb813, 0x331a00);
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    solarGroup.add(sun);

    // Create fewer, simpler planets
    const planets = [];
    const planetData = [
      { distance: 4, size: 0.3, color: 0x8c7853, speed: 0.02 },
      { distance: 6, size: 0.4, color: 0x4ade80, speed: 0.015 },
      { distance: 8, size: 0.35, color: 0x3b82f6, speed: 0.01 },
    ];

    planetData.forEach((data, index) => {
      const planetGeometry = new THREE.SphereGeometry(data.size, 12, 8); // Very low poly
      const planetMaterial = createSimpleMaterial(data.color);
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      
      const planetGroup = new THREE.Group();
      planet.position.x = data.distance;
      planetGroup.add(planet);
      solarGroup.add(planetGroup);
      
      planets.push({ group: planetGroup, speed: data.speed });
    });

    // Reduced frame rate animation
    let lastTime = 0;
    const targetFPS = 24; // Even lower FPS for mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        // Animate planets
        planets.forEach(planet => {
          planet.group.rotation.y += planet.speed;
        });

        // Slow sun rotation
        sun.rotation.y += 0.003;

        // Slow overall rotation
        solarGroup.rotation.y += 0.001;

        renderer.render(scene, camera);
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      sunGeometry.dispose();
      sunMaterial.dispose();
      planets.forEach(planet => {
        planet.group.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "400px",
      }}
    />
  );
};

export default MobileOptimizedRotatingSolar;
