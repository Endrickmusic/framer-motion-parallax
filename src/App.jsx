import { Color } from "three"
import { Canvas, extend } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { MotionCanvas } from "framer-motion-3d"

import './index.css'

import Experience from "./Experience"
import MultiLayerParallax from "./MultiLayerParallax.jsx"

extend({ Color })

export default function App() {

 return (

  <>
    <div className="relative">
      <div className="absolute w-full h-full z-20">
          <MultiLayerParallax />
      </div>
      
      <div className="relative w-full h-full z-30">
        <MotionCanvas shadows camera={{ position: [0, 0, 4], fov: 40 }}>
      
          <Environment
            files="./textures/envmap.hdr" />
            {/* <color 
              attach="background" 
              args={["#eeeeee"]} /> */}
          <Experience />
        </MotionCanvas>
      </div>

   

    <div className="relative w-full z-30">    
      <p className="max-w-lg space-y-4 space-x-4 mx-auto my-6 text-xl">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Donec quam felis, ultricies nec, 
      pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, 
      viverra quis, feugiat a, tellus. Phasellus viverra nulla ut 
      metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
      Etiam ultricies nisi vel augue. Curabitur ullamcorper 
      ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas 
      tempus, tellus eget condimentum rhoncus, sem quam semper 
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam 
      nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
      </p>
      <p className="max-w-lg space-y-4 space-x-4 mx-auto my-6 text-xl">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis natoque penatibus et magnis dis parturient montes, 
      nascetur ridiculus mus. Donec quam felis, ultricies nec, 
      pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
      Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate 
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
      vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, 
      viverra quis, feugiat a, tellus. Phasellus viverra nulla ut 
      metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
      Etiam ultricies nisi vel augue. Curabitur ullamcorper 
      ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas 
      tempus, tellus eget condimentum rhoncus, sem quam semper 
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam 
      nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
      </p>
    </div>
    </div>
  </>
  )
}

