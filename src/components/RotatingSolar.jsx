import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Main React component for the 3D scene
const RotatingSolar = () => {
  // A ref to hold the DOM element where we'll render the Three.js scene
  const containerRef = useRef(null);

  useEffect(() => {
    // === Renderer, Scene, Camera Setup ===
    // Get the current DOM element from the ref
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Performance optimizations
    renderer.info.autoReset = false;
    renderer.sortObjects = false;
    // Append the renderer's canvas to the container ref
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      30,
      container.clientWidth / container.clientHeight,
      1,
      200
    );
    camera.position.set(0, 9, 55);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.minDistance = 2;
    controls.maxDistance = 8;
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.target.set(0, 0, 0);
    controls.update();

    // === Lighting ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(-5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
    fillLight.position.set(5, 3, 3);
    scene.add(fillLight);

    const domeOnlyLights = new THREE.Group();
    domeOnlyLights.name = "domeOnlyLights";
    scene.add(domeOnlyLights);

    const mainGroup = new THREE.Group();
    mainGroup.rotation.x = (20 * Math.PI) / 180;
    scene.add(mainGroup);

    // === Blob/Dome Group ===
    const domeGroup = new THREE.Group();
    domeGroup.position.y = -0.5;
    mainGroup.add(domeGroup);

    const DOME_LAYER = 1;
    const rimLight = new THREE.DirectionalLight(0x35ffa1, 0.8);
    rimLight.position.set(0, 2, -5);
    rimLight.target = domeGroup;
    rimLight.layers.set(DOME_LAYER);
    domeOnlyLights.add(rimLight);

    const domeMat = new THREE.MeshPhysicalMaterial({
      color: 0x1a4d2e,
      transmission: 0.361,
      thickness: 0,
      roughness: 0.336,
      metalness: 0.0,
      envMapIntensity: 2,
      sheen: 1,
      sheenColor: new THREE.Color(0x4ade80),
      sheenRoughness: 0.201,
      clearcoat: 1,
      clearcoatRoughness: 0.853,
      ior: 1.081,
      transparent: true,
      side: THREE.FrontSide,
      emissive: new THREE.Color(0x0d3320),
      emissiveIntensity: 0.28,
    });

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 64, 64),
      domeMat
    );
    dome.position.y = 0.5;
    dome.castShadow = true;
    dome.receiveShadow = false;
    domeGroup.add(dome);

    const innerPointLight = new THREE.PointLight(0x4ade80, 1.0, 1.0);
    innerPointLight.position.set(0, 0.5, 0);
    domeGroup.add(innerPointLight);

    const innerGlowMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    const innerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.67, 32, 32),
      innerGlowMat
    );
    innerGlow.position.copy(dome.position);
    domeGroup.add(innerGlow);

    // Green glow rim (similar to Blob3D)
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    });
    const rim = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 32, 32),
      rimMat
    );
    rim.position.copy(dome.position);
    domeGroup.add(rim);

    // === Compact Disk and Orbits Group ===
    const compactDiskGroup = new THREE.Group();
    mainGroup.add(compactDiskGroup);

    const diskGeo = new THREE.RingGeometry(1.4, 4.6, 64);
    const diskMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      metalness: 0.9,
      roughness: 0.3,
      side: THREE.DoubleSide,
    });
    const compactDisk = new THREE.Mesh(diskGeo, diskMat);
    compactDisk.rotation.x = -Math.PI / 2;
    compactDisk.receiveShadow = true;
    compactDiskGroup.add(compactDisk);

    // === Glowing Rings ===
    const glowingRingsGroup = new THREE.Group();
    compactDiskGroup.add(glowingRingsGroup);

    const metallicRingMat = new THREE.MeshStandardMaterial({
      color: 0x696969,
      metalness: 0.9,
      roughness: 0.3,
      envMapIntensity: 0.8,
    });
    metallicRingMat.lightMapIntensity = 0;

    const numRings = 20;
    for (let i = 1; i <= numRings; i++) {
      const ringRadius = 1.0 + i * 0.4;
      const ringGeo = new THREE.TorusGeometry(ringRadius, 0.02, 8, 50);
      const ring = new THREE.Mesh(ringGeo, metallicRingMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.01;
      glowingRingsGroup.add(ring);
    }

    // === Glowing Spheres (on orbits) ===
    const glowingSpheresGroup = new THREE.Group();
    compactDiskGroup.add(glowingSpheresGroup);

    function addGlowingSphere(radius, angle, sphereSize = 0.08) {
      const sphereGeo = new THREE.SphereGeometry(sphereSize, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0x4ade80,
        emissive: 0x2a9d5d,
        emissiveIntensity: 0.3,
        metalness: 0.2,
        roughness: 0.8,
        transparent: false,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      const initialX = radius * Math.cos(angle);
      const initialZ = radius * Math.sin(angle);
      const initialY = 0.01;
      sphere.position.set(initialX, initialY, initialZ);
      glowingSpheresGroup.add(sphere);
    }

    addGlowingSphere(2.2, Math.PI * 0.2);
    addGlowingSphere(2.6, Math.PI * 1.5);
    addGlowingSphere(3.0, Math.PI * 0.8);
    addGlowingSphere(3.4, Math.PI * 1.8);
    addGlowingSphere(3.8, Math.PI * 0.5);
    addGlowingSphere(4.2, Math.PI * 1.1);
    addGlowingSphere(3.4, Math.PI * 0.3);
    addGlowingSphere(2.6, Math.PI * 0.6, 0.04);
    addGlowingSphere(3.8, Math.PI * 1.3, 0.04);

    // Adding 5 new small spheres near the first orbit
    // 3 normal-sized spheres
    addGlowingSphere(1.8, Math.PI * 0.1);
    addGlowingSphere(1.8, Math.PI * 0.9);
    addGlowingSphere(2.2, Math.PI * 1.7);
    // 2 small-sized spheres
    addGlowingSphere(1.8, Math.PI * 0.4, 0.04);
    addGlowingSphere(2.2, Math.PI * 1.2, 0.04);

    // === Eyes (on the dome) ===
    const eyesGroup = new THREE.Group();
    domeGroup.add(eyesGroup);

    function makeEye(x) {
      const geo = new THREE.CapsuleGeometry(0.08, 0.25, 3, 16);
      const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, 0.6, 0.75);
      m.rotation.x = 0.0;
      m.castShadow = false;
      m.receiveShadow = false;
      m.renderOrder = 1;
      m.userData = { originalScaleY: 1 };
      return m;
    }

    const leftEye = makeEye(-0.2);
    const rightEye = makeEye(0.2);
    eyesGroup.add(leftEye, rightEye);

    // === Animation Loop ===
    let t = 0;
    let blinkTimer = 0;
    let isBlinking = false;
    const blinkDuration = 0.3;
    const blinkInterval = 6.0;
    let frameCount = 0;

    let animationId;
    const tick = () => {
      frameCount++;
      
      // Reduce animation frequency for non-critical updates
      if (frameCount % 2 === 0) {
        t += 0.012;
        blinkTimer += 0.012;
      }

      if (blinkTimer >= blinkInterval && !isBlinking) {
        isBlinking = true;
        blinkTimer = 0;
      }

      if (isBlinking) {
        let blinkProgress = blinkTimer / blinkDuration;
        if (blinkProgress <= 1.0) {
          let blinkScale = Math.abs(Math.sin(blinkProgress * Math.PI));
          leftEye.scale.y = blinkScale * 0.1 + 0.1;
          rightEye.scale.y = blinkScale * 0.1 + 0.1;
        } else {
          leftEye.scale.y = 1.0;
          rightEye.scale.y = 1.0;
          isBlinking = false;
          blinkTimer = 0;
        }
      }

      // Update animations only on specific frames to reduce calculations
      if (frameCount % 2 === 0) {
        innerGlow.material.opacity = 0.15 + 0.08 * Math.sin(t * 2.0);
        innerPointLight.intensity = 0.8 + 0.4 * Math.sin(t * 2.0);
        domeGroup.rotation.y = Math.sin(t * 0.3) * 0.1;
        
        // Subtle rim opacity pulse (similar to Blob3D)
        rim.material.opacity = 0.15 + 0.03 * Math.sin(t * 1.5);
      }
      if (domeOnlyLights) {
        domeOnlyLights.position.copy(mainGroup.position);
        domeOnlyLights.rotation.copy(mainGroup.rotation);
      }

      compactDiskGroup.rotation.y += 0.0002;
      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(tick);
    };
    tick();

    // === Resize Handler ===
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function: this runs when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      controls.dispose();
      renderer.dispose();
      // Dispose geometries/materials if needed:
      dome.geometry.dispose();
      dome.material.dispose();
      innerGlow.geometry.dispose();
      innerGlow.material.dispose();
      rim.geometry.dispose();
      rim.material.dispose();
      compactDisk.geometry.dispose();
      compactDisk.material.dispose();
      // Remove canvas
      container.removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Return the JSX for the component
  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default RotatingSolar;
