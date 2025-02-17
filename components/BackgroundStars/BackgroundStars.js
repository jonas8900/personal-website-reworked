'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import styled from 'styled-components';

function BackgroundStarsGroup(){
  const ref = useRef();

  function generateRandomPoints(numPoints, radius) {
    const points = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }
    return points;
  }

  const [sphere] = useState(() => generateRandomPoints(2000, 1.5)); 

  useFrame((state, delta) => {
    if (ref.current) {
      const d = Math.min(delta, 0.02); 
      ref.current.rotation.x -= d / 220;
      ref.current.rotation.y -= d / 290;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#373737"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

//useFrame can only be used inside a Canvas component, so i need to wrap my BackgroundStarsGroup component inside a Canvas component
export default function StarsCanvas()  {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return mounted ? (
      <CanvasContainer>
        <Canvas
          camera={{ far: 1000, position: [0, 0, 1] }}
          dpr={[1, 2]}
          style={{ width: '100%', height: '100%' }}
        >
          <BackgroundStarsGroup />
        </Canvas>
      </CanvasContainer>
    ) : null;
  };
  
  
  const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;
