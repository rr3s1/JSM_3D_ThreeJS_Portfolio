import React, {Suspense} from 'react'
import {PerspectiveCamera} from '@react-three/drei'
import {HackerRoom} from '../components/HackerRoom.jsx'
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Canvas} from "@react-three/fiber";
import {Leva, useControls} from "leva";


const Hero = () => {
    const x = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 0,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        },
    })
    return (
        <section className="min-h-screen border-2 border-blue-500 w-full relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, I am Adrian <span className="waving-hand ">👌🖐️🤞🤟</span></p>
            <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        </div>
            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <HackerRoom
                                //scale={0.5}
                                //position={[0,0,0]}
                                //rotation={[0,0,0]}
                                //rotation={[0, -Math.PI / 2, 0]}
                                position={[x.positionX, x.positionY, x.positionZ]}
                                rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                                scale={[x.scale, x.scale, x.scale]}
                    />

                        <ambientLight intensity={1}/>
                        <directionalLight position ={[10,10,10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

        </section>
    )
}
export default Hero
