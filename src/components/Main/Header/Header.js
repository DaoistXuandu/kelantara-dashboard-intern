// NavBar.jsx
import { description } from '@/description';
import { merriweather, roboto } from '@/fonts';
import { link } from '@/link';
import React from 'react';

const Header = () => {
    return (
        <div
            className="bg-white w-full text-black relative z-30 
            lg:bg-[url('/images/header_background.png')] 
            bg-[url('/images/header_background_mobile.png')]  
            bg-no-repeat bg-cover bg-center h-[560px] lg:h-110
            flex items-end
            "
        >
            <div className='px-4 lg:px-10 pt-22 lg:pt-36' style={{ background: "linear-gradient(to top, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)" }}>
                <h1 style={{ fontWeight: 700 }} className={`text-[32px] lg:text-[64px] ${merriweather.className}`}>{description.header.id}</h1>
                <p style={{ fontWeight: 400 }} className={`text-[16px] lg:text-[24px] ${roboto.className}`}>{description.body.id}</p>
            </div>
        </div >
    );
};

export default Header;
