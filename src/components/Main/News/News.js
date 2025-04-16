// NavBar.jsx
import { description } from '@/description';
import { merriweather, roboto } from '@/fonts';
import { link } from '@/link';
import React from 'react';
import Card from '../Carousel/Card';
import { news, populer } from '@/data';
import SeeAll from '../../SeeAll';
import Headline from './Headline';

const News = () => {
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
                <h1 style={{ fontWeight: 600 }} className={`${roboto.className} text-[18px] lg:text-[28px]`}>{description.news.id}</h1>
                <SeeAll name={link.news_see_all.name} link={link.news_see_all.address} />
            </div>
            <div className="flex flex-col overflow-x-auto scroll-smooth scrollbar-hide">
                <Headline item={news.patroli} />
                <Headline item={news.community} />
                <Headline item={news.workshop} />
                <Headline item={news.bibit} />
            </div>
        </div >
    );
};

export default News;
