import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Blob3D = ({ size = 340 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
    camera.position.set(0, 0, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.target.set(0, 0, 0);
    controls.update();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(-5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
    fillLight.position.set(5, 3, 3);
    // scene.add(fillLight);

    // Blob group
    const blobGroup = new THREE.Group();
    scene.add(blobGroup);

    const blobMat = new THREE.MeshPhysicalMaterial({
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

    const blob = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 128, 128),
      blobMat
    );
    blob.position.y = 0;
    blob.castShadow = true;
    blob.receiveShadow = false;
    blobGroup.add(blob);

    // Inner glow
    const innerGlowMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    const innerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.15, 64, 64),
      innerGlowMat
    );
    innerGlow.position.copy(blob.position);
    blobGroup.add(innerGlow);

    // Eyes
    function makeEye(x) {
      const geo = new THREE.CapsuleGeometry(0.08, 0.25, 4, 32);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: false,
        depthWrite: true,
        depthTest: true,
        fog: false,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, 0.1, 1.25);
      m.rotation.x = 0.0;
      m.castShadow = false;
      m.receiveShadow = false;
      m.renderOrder = 1;
      m.userData = { originalScaleY: 1 };
      return m;
    }
    const leftEye = makeEye(-0.2);
    const rightEye = makeEye(0.2);
    blobGroup.add(leftEye, rightEye);

    // Ground plane for shadows
    const groundGeo = new THREE.PlaneGeometry(10, 10);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.1 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.5;
    ground.receiveShadow = true;
    scene.add(ground);

    // Animation
    let t = 0;
    let blinkTimer = 0;
    let isBlinking = false;
    let blinkDuration = 0.3;
    let blinkInterval = 6.0;
    let animationId;
    const tick = () => {
      t += 0.012;
      blinkTimer += 0.012;
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
      blobGroup.position.y = Math.sin(t * 0.8) * 0.03;
      innerGlow.material.opacity = 0.15 + 0.08 * Math.sin(t * 2.0);
      blobGroup.rotation.y = Math.sin(t * 0.3) * 0.1;
      controls.update();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(tick);
    };
    tick();

    // Resize
    // Optional: handle resize if you want responsive
    // const handleResize = () => {
    //   camera.aspect = size / size;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize(size, size);
    // };
    // window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      controls.dispose();
      renderer.dispose();
      blob.geometry.dispose();
      blob.material.dispose();
      innerGlow.geometry.dispose();
      innerGlow.material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
      }}
    />
  );
};

export default Blob3D;
