'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RetroTV() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous render
    while (container.firstChild) container.removeChild(container.firstChild);

    const width = container.clientWidth || 620;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the TV
    const tvGroup = new THREE.Group();
    scene.add(tvGroup);

    // Materials
    const cabinetMat = new THREE.MeshStandardMaterial({ color: 0xff5e97, roughness: 0.3, metalness: 0.1 });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x22194d, roughness: 0.5 });
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x050510 });
    const antennaMat = new THREE.MeshStandardMaterial({ color: 0x00f5d4, metalness: 0.8, roughness: 0.2 });
    const knobMat = new THREE.MeshStandardMaterial({ color: 0xfee440, roughness: 0.4 });

    // TV Cabinet Body
    const bodyGeo = new THREE.BoxGeometry(3.2, 2.4, 1.8);
    const bodyMesh = new THREE.Mesh(bodyGeo, cabinetMat);
    tvGroup.add(bodyMesh);

    // Screen Bezel
    const bezelGeo = new THREE.BoxGeometry(2.1, 1.7, 0.2);
    const bezelMesh = new THREE.Mesh(bezelGeo, frameMat);
    bezelMesh.position.set(-0.35, 0, 0.85);
    tvGroup.add(bezelMesh);

    // TV Screen Glass (Bulging CRT curvature)
    const screenGeo = new THREE.PlaneGeometry(1.9, 1.5, 16, 16);
    const pos = screenGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vy = pos.getY(i);
      const vz = (1 - (vx * vx * 0.3 + vy * vy * 0.3)) * 0.08;
      pos.setZ(i, vz);
    }
    screenGeo.computeVertexNormals();
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(-0.35, 0, 0.96);
    tvGroup.add(screenMesh);

    // CRT Static / Glitch overlay
    const staticCanvas = document.createElement('canvas');
    staticCanvas.width = 128;
    staticCanvas.height = 128;
    const staticCtx = staticCanvas.getContext('2d')!;
    const staticTexture = new THREE.CanvasTexture(staticCanvas);
    const crtOverlayMat = new THREE.MeshBasicMaterial({ map: staticTexture, transparent: true, opacity: 0.85 });
    const crtOverlay = new THREE.Mesh(new THREE.PlaneGeometry(1.85, 1.45), crtOverlayMat);
    crtOverlay.position.set(-0.35, 0, 0.99);
    tvGroup.add(crtOverlay);

    // Knobs
    const knobGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.2, 16);
    const knob1 = new THREE.Mesh(knobGeo, knobMat);
    knob1.rotation.x = Math.PI / 2;
    knob1.position.set(1.05, 0.45, 0.95);
    tvGroup.add(knob1);

    const knob2 = new THREE.Mesh(knobGeo, knobMat);
    knob2.rotation.x = Math.PI / 2;
    knob2.position.set(1.05, -0.15, 0.95);
    tvGroup.add(knob2);

    // Speaker slits
    for (let i = 0; i < 3; i++) {
      const slitGeo = new THREE.BoxGeometry(0.5, 0.06, 0.05);
      const slitMesh = new THREE.Mesh(slitGeo, frameMat);
      slitMesh.position.set(1.05, -0.6 - i * 0.15, 0.92);
      tvGroup.add(slitMesh);
    }

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.08, 0.05, 0.7, 8);
    const legPositions = [[-1.2, -1.4, 0.6, 0.25], [1.2, -1.4, 0.6, -0.25], [-1.2, -1.4, -0.6, 0.25], [1.2, -1.4, -0.6, -0.25]];
    legPositions.forEach(([x, y, z, rz]) => {
      const leg = new THREE.Mesh(legGeo, frameMat);
      leg.position.set(x, y, z);
      leg.rotation.z = rz;
      tvGroup.add(leg);
    });

    // Antenna
    const antBaseGeo = new THREE.SphereGeometry(0.15, 12, 12);
    const antBase = new THREE.Mesh(antBaseGeo, frameMat);
    antBase.position.set(0, 1.25, 0);
    tvGroup.add(antBase);

    const rodGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.4, 8);
    const rod1 = new THREE.Mesh(rodGeo, antennaMat);
    rod1.position.set(-0.45, 1.8, 0);
    rod1.rotation.z = 0.55;
    tvGroup.add(rod1);

    const rod2 = new THREE.Mesh(rodGeo, antennaMat);
    rod2.position.set(0.45, 1.8, 0);
    rod2.rotation.z = -0.55;
    tvGroup.add(rod2);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const dirLight = new THREE.DirectionalLight(0xffe600, 1.5);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);
    const pinkLight = new THREE.PointLight(0xff5e97, 2, 10);
    pinkLight.position.set(-3, 2, 3);
    scene.add(pinkLight);

    // Mouse interaction
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotY = x * 0.45;
      targetRotX = -y * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const clock = new THREE.Clock();
    let frameCount = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Float
      tvGroup.position.y = Math.sin(time * 2) * 0.12;

      // Mouse tracking
      tvGroup.rotation.y += (targetRotY - tvGroup.rotation.y) * 0.08;
      tvGroup.rotation.x += (targetRotX - tvGroup.rotation.x) * 0.08;
      tvGroup.rotation.z = Math.sin(time * 1.5) * 0.03;

      // Static noise
      frameCount++;
      if (frameCount % 3 === 0) {
        const imgData = staticCtx.createImageData(128, 128);
        const buffer = new Uint32Array(imgData.data.buffer);
        for (let i = 0; i < buffer.length; i++) {
          const isGreenScan = Math.floor(i / 128) % 8 === 0 && Math.random() > 0.4;
          if (isGreenScan) {
            buffer[i] = 0xff00ff41;
          } else {
            const val = Math.floor(Math.random() * 255);
            if (Math.random() > 0.85) {
              buffer[i] = (255 << 24) | (200 << 16) | (50 << 8) | 255;
            } else {
              buffer[i] = (255 << 24) | (val << 16) | (val << 8) | val;
            }
          }
        }
        staticCtx.putImageData(imgData, 0, 0);
        staticTexture.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      // Cleanup geometries and materials
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[460px] max-w-[620px] mx-auto relative z-10 bg-transparent"
      aria-label="Interactive 3D Retro TV"
      role="img"
    />
  );
}
