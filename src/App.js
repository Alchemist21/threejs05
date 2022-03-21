import React from 'react';
import { DefaultXRControllers, VRCanvas, Hover } from '@react-three/xr';
import { Hands } from '@react-three/xr';
import { OrbitControls, Box } from '@react-three/drei';


function App() {
  return (
    <VRCanvas>
     
      <Hands />

      <OrbitControls />

      
        <Box position={[0, 0.8, -1]} scale={[3, 2, 3]}>
        <meshBasicMaterial color="yellow" />
      </Box>
    
    <DefaultXRControllers />
    </VRCanvas>  
  );
}

export default App;
