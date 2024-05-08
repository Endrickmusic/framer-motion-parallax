import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MultiLayerParallax() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

    return (
        <div className='w-full h-screen overflow-hidden relative grid place-items-center'>
            <motion.h1 
            style={{ y: textY }}
            className='text-7xl font-bold text-white md:text-9xl relative z-40 mt-[-450px]'>
                PARALLAX
            </motion.h1>

            <motion.div className="absolute inset-0 z-30"
            style={{
                backgroundImage: 'url(./images/clouds.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                y: backgroundY
            }}
            >
            </motion.div>

            <div className="absolute inset-0 z-50"
            style={{
                backgroundImage: 'url(./images/clouds_alpha.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'top',
            }}
            >
            </div>
        </div>
   )
}            