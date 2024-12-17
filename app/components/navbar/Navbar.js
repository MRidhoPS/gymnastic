'use client'

import React from 'react'
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavbarMenu } from '@/app/MockData/data';
import { ResponsiveMenu } from './responsivemenu';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <nav>
                <div className='container flex items-center justify-between py-8'>
                    {/* Logo Section */}
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                        <FaDumbbell />
                        <p>Lidya</p>
                        <p className='text-primary'>Zumba</p>
                    </div>
                    {/* Menu Section */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-6 text-gray-600'>
                            {NavbarMenu.map((item) => {
                                return <li key={item.id}>
                                    <a href={item.link} className='inline-block py-1 px-3 hover:text-yellow-600'>{item.title}</a>
                                </li>;
                            })}
                        </ul>
                    </div>
                    {/* Icon Section */}
                    <div className='flex items-center gap-4'>
                        <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                            <CiSearch>

                            </CiSearch>
                        </button>
                    </div>
                    {/* Mobile Menu Section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <MdMenu className='text-4xl' />
                    </div>
                </div>
            </nav>

            {/* Mobile sidebar */}
            <ResponsiveMenu open={open} />
        </>
    )
}

export default Navbar