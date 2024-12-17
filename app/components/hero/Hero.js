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
                            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal'>
                            Zumba Gives you the perfect <span className='text-primary'>Health</span> {" "}
                        </motion.h1>
                        <motion.p
                            variants={SlideRight(1.2)}
                            initial='hidden'
                            animate='visible'
                            className='text-gray-600 xl:max-w-[500px]'>
                            It is a long established fact that a reader will be by readable content of a page when are the best products.
                        </motion.p>
                        {/* Button Section */}
                        {/* <motion.div
                            variants={SlideRight(1.6)}
                            initial='hidden'
                            animate='visible' 
                            className='flex justify-center gap-8 items-center md:justify-start mt-6'>
                            <button className='primary-btn flex items-center gap-2'>
                                {" "}
                                Order Now
                            </button>
                            <button className='flex  justify-center items-center gap-2'>
                                Watch Now
                            </button>
                        </motion.div> */}
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