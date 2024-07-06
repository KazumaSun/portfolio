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
      color: 0xf0f0f0,
      wireframe: true,
    });
    const earth = new THREE.Mesh(geometry, material);
    earthRef.current = earth;

    scene.add(earth);

    const axis = new THREE.Vector3(0, 1, 0); // Z軸
    axis.applyAxisAngle(new THREE.Vector3(0, 0, 1), 0); // X軸周りに23.5度傾ける

    const animate = () => {
      if (earthRef.current) {
        earthRef.current.rotateOnWorldAxis(axis, 0.001); // 回転速度を落とす
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      scene.remove(earth);
    };
  }, [scene]);

  return null;
};

export default Earth;
