import React from 'react';

import { AiOutlineYoutube } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo/shudri samridhi.png'
import GoogleMapUse from './GoogleMapUse';

const Footer = () => {
    return (
        <footer className="bg-[#1800ad]  text-white">
            <div className="px-10 mx-auto p-3  ">
                <div className="flex flex-col md:flex-row justify-between items-center mb-5 border-b border-gray-700 pb-5 gap-6">
                    <div className="flex gap-4 justify-center items-center">

                        <SocialIcon
                            icon={<AiOutlineYoutube size={30} className="w-13 h-15" />}
                            path="https://www.youtube.com/"
                        />

                        <SocialIcon
                            icon={<FaFacebookSquare size={26} className="w-10 h-10" />}
                            path="https://www.facebook.com/santosh.kumar.373439"
                        />

                        <SocialIcon
                            icon={<FaInstagram size={26} className="w-10 h-10" />}
                            path="https://www.instagram.com/dr_s_ram2654/"
                        />

                        <SocialIcon
                            icon={<FaTwitterSquare size={26} className="w-10 h-10" />}
                            path="https://twitter.com/"
                        />

                    </div>
                </div>

                {/* Middle Section: Grid Links */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr] gap-10 mb-5 w-full  ">
                    {/* Column 1: Our Story */}
                    <div className="flex flex-col items-center    w-full relative text-center">
                        {/* Logo + Text */}
                        {/* <div className="flex items-center  relative  gap-3 ">
                            <img src={logo} alt="Anarya Logo" className="w-18 sm:w-20 md:w-25  h-auto flex  " />
                            <div className=' pt-10   md:pt-9 relative mb-6'>
                                <p style={{ fontFamily: "'Libre Baskerville', serif" }} className="text-2xl sm:text-xl md:text-2xl font-bold">SHUDRA SAMRIDHI</p>
                                <p className="text-sm sm:text-base md:text-xl tracking-wide">  E - Capital Solution Of SC-ST</p>
                            </div>
                        </div> */}

                        <GoogleMapUse />

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-7 w-full">
                        {/* Column 2: Our Story */}
                        <div className="space-y-4">

                            {/* <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wider"> Resources</h3>
                            <ul className="text-sm space-y-2" >
                               
                                <FooterLink text="About Us"  path='/about-university'/>
                                <FooterLink text="FAQs" path="/faqs" />
                                 

                            </ul> */}
                        </div>

                        {/* Column 3: Legal */}
                        <div className="space-y-4">
                            {/* <h3 className="text-orange-500 font-bold text-lg uppercase tracking-wider">Our Courses</h3>
                            <ul className="text-sm space-y-2">
                                <FooterLink text="Undergraduate Degrees" path="/#explore-courses" />
                                <FooterLink text="Diploma & Certificate" path="/#explore-courses" />
                                <FooterLink text="Postgraduate Degrees" path="/#explore-courses" />
                                <FooterLink text="Medical Degrees" path="/#explore-courses" />

                            </ul> */}
                        </div>

                        {/* Column 4: Address */}
                        <div className="space-y-2  ">
                            <h3 className="text-orange-600 font-bold text-lg uppercase tracking-wider">Contact Us</h3>
                            <div className="text-sm leading-relaxed space-y-2">
                                <p className='text-xl'>Mishra Market Koini Bazar<br />Gopalganj - 841428, Bihar India</p>
                                <label>Phone : </label>           <span className="hover:text-orange-400 transition-colors cursor-pointer">+91-7909097317</span>
                                <div>  <label>Email : </label><span className="hover:text-orange-400 transition-colors cursor-pointer">c.com</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Bottom Section: Copyright */}
                <div className="border-t border-gray-700  py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
                    <div className="flex items-center gap-2">

                        <FaRegCopyright className="w-3 h-4" />
                        <p>  2026 All rights reserved SANTOSH MEDICAL HALL</p>
                    </div>
                    <p className="text-center md:text-right max-w-md">
                        Optimized for modern browsers (Chrome 80+, Safari 5.1+, Edge 81+)
                    </p>
                </div>
            </div>
        </footer >
    );
}
// Helper Components to keep code clean

const FooterLink = ({ text, path }) => (
    <li>
        <Link target="_blank" to={path} className="hover:text-orange-500 hover:translate-x-2 transition-all duration-300 inline-block"> {text} </Link>
    </li>
);

const SocialIcon = ({ icon, path }) => (
    <Link to={path} target="_blank" className="text-gray-400 hover:text-orange-500 hover:-translate-y-1 transition-all duration-300 transform">
        {icon}
    </Link>
);

export default Footer;