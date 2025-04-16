// NavBar.jsx
import { description } from '@/description';
import { roboto } from '@/fonts';
import { link } from '@/link';
import React from 'react';
import Card from './Card';
import { populer } from '@/data';
import SeeAll from '../../SeeAll';

const Slider = () => {
    return (
        <div
            className="bg-white w-full text-black mt-5
            bg-no-repeat  lg:bg-cover bg-center h-fit
            relative
            px-5 lg:px-12
            flex
            flex-col
            "
        >
            <div className='flex flex-row items-center justify-between'>
                <h1 style={{ fontWeight: 600 }} className={`${roboto.className} text-[18px] lg:text-[28px]`}>{description.populer.id}</h1>
                <SeeAll name={link.populer_see_all.name} link={link.populer_see_all.address} />
            </div>
            <div className="flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide mt-2">
                <Card item={populer.papua} />
                <Card item={populer.bali} />
                <Card item={populer.papua} />
                <Card item={populer.bali} />
            </div>
        </div >
    );
};

export default Slider;
