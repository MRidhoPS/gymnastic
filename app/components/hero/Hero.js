'use client'

import React from 'react'
import HeroImage from '../../assets/dumbell.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight, SlideUp } from '@/app/utility/animations'


const Hero = () => {
    return (
        <>
            <section>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                    {/* brand info */}
                    <div className='text-center md:text-left flex flex-col justify-center py-14 md:py-0 font-playfair'>
                        <motion.h1
                            variants={SlideRight(0.6)}
                            initial='hidden'
                            animate='visible'
                            className='text-5xl lg:text-7xl font-bold leading-none mb-5'>
                            Hello, I`m<span className='text-primary'> Lidya Rachmawati</span>
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="text-gray-600 xl:max-w-[500px]"
                        >
                            I’m a passionate <span className="text-primary font-bold font-playfair">Instruktur Zumba dan Aerobik Jakarta</span>, dedicated to helping you achieve your fitness goals while having fun. With years of experience as a <span className="text-primary font-bold font-playfair">Instruktur Zumba Jakarta</span>, I offer <span className="text-primary font-bold font-playfair">Senam Aerobic Jakarta</span> sessions that are energizing and enjoyable. Join over <span className="text-primary font-bold font-playfair">100+ satisfied clients</span> in our vibrant <span className="text-primary font-bold font-playfair">Zumba Jakarta</span> community, where we make fitness fun and empowering. Discover the best <span className="text-primary font-bold font-playfair">Senam Jakarta</span> classes with <span className="text-primary font-bold font-playfair">Lidya Zumba Jakarta</span> and <span className="text-primary font-bold font-playfair">Lidya Aerobic Jakarta</span> for a healthier, more active lifestyle.
                        </motion.p>

                    </div>

                    {/* hero image */}
                    <div className='flex justify-center items-center'>
                        <Image
                            variants={SlideLeft(2)}
                            initial='hidden'
                            animate='visible'
                            src={HeroImage} alt='' className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />

                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero