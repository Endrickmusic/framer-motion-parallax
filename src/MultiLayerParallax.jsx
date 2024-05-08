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
    const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])

    return (
        <div className='w-full h-screen overflow-hidden relative grid place-items-center'
        style={{ height: '170vh' }}>
            <motion.h1 
            style={{ y: textY }}
            className='text-9xl font-bold text-white md:text-9xl relative z-40 mt-[-850px]'>
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

            <motion.div className="absolute inset-0 z-50"
            style={{
                backgroundImage: 'url(./images/clouds_alpha.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                y: cloudY
            }}
            >
            </motion.div>
        </div>
   )
}            