import React,{Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = ({isMobile}) => {
  const computer= useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="black"/>
      <pointLight intensity={1.5}/>
      <spotLight
      position={[0, 10, 10]}
      angle={0.8}
      penumbra={2}
      intensity={5}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive object={computer.scene}
      scale={isMobile ? 0.5 : 1 }
      position={isMobile?[0,-1,2]:[0,-2.5,-2]}
      rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  )
}
const ComputersCanvas =() =>{
  const [isMobile, setIsMobile]= useState(false);
  useEffect(()=>{const mediaQuery= window.matchMedia('(max-width : 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{setIsMobile(event.matches)}
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return ()=>{mediaQuery.removeEventListener('change',handleMediaQueryChange)}
  },[])

  return <Canvas frameloop='demand'
  shadows 
  camera={{position:[20,3,5],fov:25}}
  gl={{preserveDrawingBuffer:true}}
  >
    <Suspense fallback={<CanvasLoader/>}>
    <OrbitControls 
    autoRotate autoRotateSpeed={2.5}
    enableZoom={false} 
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2}/>
    <Computers/>
    </Suspense>
    <Preload all/>
  </Canvas>
}

export default ComputersCanvas;