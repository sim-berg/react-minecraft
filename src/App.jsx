import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'

import './App.css'
import { Player } from './components/Player'
import { FPV } from './components/FPV'
import { Cubes } from './components/Cubes'
import { TextureSelector } from './components/TextureSelector'
import { Menu } from './components/Menu'
import  github  from './images/GitHub-logo.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Canvas>
    <Sky sunPosition={[100,100,20]}/>
    <ambientLight intensity={0.5}/>
    <FPV/>
    <Physics>
      <Player/>
      <Cubes/>
      <Ground/>

    </Physics>

    </Canvas>
    <TextureSelector/>
    <div className='cursor absolute centered'>+</div>
    <Menu/>
    <div className='howto absolute'> Move = W,S,A,D <br />
                            Jump = Spacebar <br />
                            Place Block = Click<br />
                            Remove Block = Alt+Click<br />
                            Switch Block = 1,2,3,4,5</div>
    <div className='github absolute'><img className="githubimg" src={github} alt=""  /></div>
    </>
    
  )
}

export default App
