// NavBar.jsx
import { link } from '@/link';
import React, { useEffect, useState } from 'react';
import Link from './Link';
import Logo from './Logo';
import ActitvityButton from './ActivityButton';
import Menu from './Menu';

const NavBar = () => {
    const [menuOn, setMenuOn] = useState(false);

    return (
        <div className="w-full text-black fixed z-50">
            {/* Desktop Nav */}
            <div className="bg-white/90 hidden lg:flex w-full items-stretch p-2 px-10">
                <div className="w-3/12">
                    <Logo />
                </div>
                <div className="w-6/12 flex items-center justify-center gap-16">
                    <Link link={link.beranda} />
                    <Link link={link.protect} />
                    <Link link={link.donation} />
                    <Link link={link.live} />
                </div>
                <div className="w-3/12 flex items-center justify-center gap-1">
                    <ActitvityButton link={link.work} />
                    <ActitvityButton link={link.activity} />
                </div>
            </div>

            {/* Mobile Nav */}
            <div className="flex flex-col lg:hidden relative">
                <div className="bg-white/90 flex items-center relative h-16 w-full px-2 z-50">
                    <div className="absolute left-4">
                        <Menu menuOn={menuOn} setMenu={setMenuOn} />
                    </div>
                    <div className="mx-auto">
                        <Logo />
                    </div>
                </div>
                <div
                    className={`bg-white overflow-hidden w-full relative z-10 transition-all duration-300 ease-in-out h-full opacity-100 flex flex-col items-center gap-5 p-5 ${menuOn ? '' : '-translate-y-100 opacity-0'}`}>
                    <Link link={link.beranda} />
                    <Link link={link.protect} />
                    <Link link={link.donation} />
                    <Link link={link.live} />
                    <div className='flex flex-row gap-1'>
                        <ActitvityButton link={link.work} />
                        <ActitvityButton link={link.activity} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NavBar;
