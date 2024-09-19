import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface EarthProps {
  scene: THREE.Scene;
}

const Earth: React.FC<EarthProps> = ({ scene }) => {
  const earthRef = useRef<THREE.Mesh>();

  useEffect(() => {
    // 球体の作成
    const geometry = new THREE.SphereGeometry(75, 24, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xb0b0ff,
      wireframe: true,
    });
    const earth = new THREE.Mesh(geometry, material);
    earthRef.current = earth;

    // 地球儀を傾ける
    const angleRad = THREE.MathUtils.degToRad(23.5);
    const tiltAxis = new THREE.Vector3(0, 0, -1); // Z軸
    earth.rotateOnWorldAxis(tiltAxis, angleRad); // 23.5度傾ける
    scene.add(earth);

    // Z軸の直線を描写
    const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0xf0f0f0 });
    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -90, 0),
      new THREE.Vector3(0, 90, 0),
    ]);
    const zAxisLine = new THREE.Line(zAxisGeometry, zAxisMaterial);
    zAxisLine.rotateOnAxis(tiltAxis, angleRad);
    scene.add(zAxisLine);

    const rotateAxis = new THREE.Vector3(0.43, 1, 0); // Y軸

    const animate = () => {
      if (earthRef.current) {
        earthRef.current.rotateOnWorldAxis(rotateAxis, 0.001); // 回転速度
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      scene.remove(earth);
      scene.remove(zAxisLine);
    };
  }, [scene]);

  return null;
};

export default Earth;
