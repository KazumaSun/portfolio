import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface StarsProps {
  scene: THREE.Scene;
}

const Stars: React.FC<StarsProps> = ({ scene }) => {
  useEffect(() => {
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, sizeAttenuation: true });
    const starVertices = [];
    const starSizes = [];

    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      const size = Math.random() * 6 + 1;
      starVertices.push(x, y, z);
      starSizes.push(size);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    const animate = () => {
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      scene.remove(stars);
    };
  }, [scene]);

  return null;
};

export default Stars;
