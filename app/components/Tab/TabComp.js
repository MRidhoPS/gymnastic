'use client'

import { ProductsData } from '@/app/MockData/data';
import Image from 'next/image';
import React, { useState } from 'react'
import {motion} from 'framer-motion';

const TabComp = () => {

    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Zumba', 'Aerobic', 'SKJ', 'Kreasi'];

    const filteredCards = activeTab === 'All' ? ProductsData : ProductsData.filter((card) => card.category === activeTab);


    return (
        <>
            <div className='container my-12 md:my-16'>
                <div className='flex space-x-4 mb-4 p-6'>
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 rounded ${activeTab === tab ? "bg-primary text-white" : "bg-gray-200 text-gray-700"} `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredCards.map((card) => (
                        <motion.div
                            id={card.id}
                            key={card.id}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <Image src={card.image} alt='' className='h-[240px] w-full object-cover' />
                            <p className="text-xl font-semibold">{card.title}</p>
                            <p className="text-gray-500">{card.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TabComp