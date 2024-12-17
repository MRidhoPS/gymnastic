import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaLocationPinLock } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-blue-950 rounded-t-3xl">
            <div className="container mx-auto px-6 lg:px-12 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start text-white border-gray-300/10 border-t-2 py-5">

                    {/* Brand Info Section */}
                    <div className="w-full md:w-1/2 lg:w-1/3 space-y-4">
                        <div className="text-2xl font-bold uppercase flex items-center gap-2">
                            <p>Lidya</p>
                            <p className="text-secondary">Zumba</p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className="w-full md:w-1/3 mt-8 md:mt-0">
                        <h1 className="text-xl font-bold mb-5">Social Media</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-3xl" />
                                <p className="text-sm">WhatsApp</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaInstagram className="text-3xl" />
                                <p className="text-sm">Instagram</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaFacebook className="text-3xl" />
                                <p className="text-sm">Facebook</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaTiktok className="text-3xl" />
                                <p className="text-sm">TikTok</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;