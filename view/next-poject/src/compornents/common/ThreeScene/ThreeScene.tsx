import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Earth from '../Earth/Earth';
import Stars from '../Stars/Stars';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());

  useEffect(() => {
    const mount = mountRef.current;
    const scene = sceneRef.current;

    // カメラとレンダラーの設定
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mount) {
      mount.appendChild(renderer.domElement);
    }

    // ライトの設定
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 200;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // クリーンアップ
    return () => {
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef}>
      <Earth scene={sceneRef.current} />
      <Stars scene={sceneRef.current} />
    </div>
  );
};

export default ThreeScene;

