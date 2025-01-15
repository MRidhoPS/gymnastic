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
                            Saya adalah <span className="text-primary font-bold font-playfair">Instruktur Zumba</span> dan <span className="text-primary font-bold font-playfair">Senam Aerobik</span> di Jakarta yang berdedikasi untuk membantu Anda mencapai tujuan kebugaran sambil bersenang-senang. Dengan pengalaman bertahun-tahun memimpin sesi <span className="text-primary font-bold font-playfair">Zumba</span> dan <span className="text-primary font-bold font-playfair">senam aerobik</span> , saya berfokus pada menciptakan latihan yang energik dan menyenangkan. Bergabunglah dengan komunitas kami yang terdiri dari lebih dari <span className="text-primary font-bold font-playfair">100+ klien puas</span> dan temukan bagaimana kebugaran bisa menjadi menyenangkan sekaligus memberdayakan. Baik Anda mencari kelas <span className="text-primary font-bold font-playfair">Senam</span> terbaik atau sesi <span className="text-primary font-bold font-playfair">Zumba</span> yang dinamis, saya siap membimbing Anda menuju gaya hidup yang lebih sehat dan aktif.
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