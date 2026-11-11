'use client'

import React from 'react'
import HeroImage from '../../assets/dumbell.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SlideLeft, SlideRight, SlideUp } from '@/app/utility/animations'


const Hero = () => {

    const handleScrollToContact = () => {
        scroller.scrollTo('contact', {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOut',
        });
    };


    return (
        <>
            <section id="hero" aria-label="Profil Instruktur Zumba Jakarta">
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                    {/* brand info */}
                    <div className='text-center md:text-left flex flex-col justify-center items-center md:items-start py-14 md:py-0 font-playfair'>
                        <motion.h1 variants={SlideRight(0.1)} initial="hidden" animate="visible" className="...">
                            Instruktur <span className="text-primary font-bold">Zumba</span> dan <span className="text-primary font-bold">Senam Aerobik</span> di Jakarta
                        </motion.h1>
                        <p className="text-gray-600 xl:max-w-[500px] mb-6">
                            Bersama Lidya Rachmawati: kelas seru dan ramah pemula, dari Zumba sampai SKJ.
                        </p>
                        
                        <motion.button
                            onClick={handleScrollToContact}
                            variants={SlideRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="px-6 py-3 text-sm md:text-base bg-primary text-white rounded-md shadow-lg hover:bg-primary-dark focus:outline-none transition-all w-[150px] hover:bg-yellow-400"
                        >
                            Contact Me
                        </motion.button>
                    </div>


                    {/* hero image */}
                    <div className='flex justify-center items-center'>
                        <Image
                            priority sizes="(min-width:1280px) 700px, (min-width:768px) 550px, 350px"
                            initial='hidden'
                            animate='visible'
                            src={HeroImage} alt='Lidya Rachmawati - Instruktur Zumba dan Aerobik di Jakarta' className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow' />

                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero