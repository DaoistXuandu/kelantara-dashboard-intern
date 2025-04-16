
import { merriweather, roboto } from "@/fonts";
import React, { useEffect } from "react"

const Card = (item) => {
    useEffect(() => {
        console.log(item)
    }, [])
    return (
        <a href={item.item.address} className="shrink-0">
            <div className="relative w-fit h-fit">
                <img src={item.item.link} className={`rounded-md relative w-[282px] h-[188px] lg:w-[379px] lg:h-[188px]`}></img>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <img src="/images/populer/play.png" className="w-6 h-6" />
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-0">
                <h1 style={{ fontWeight: 600 }} className={`${roboto.className} text-[16px] lg:text-[28px]`}>{item.item.name}</h1>
                <div className="flex flex-row items-center gap-1">
                    <div style={{ backgroundColor: "#E4003A" }} className="w-[5px] h-[5px] rounded-full"></div>
                    <h2 style={{ fontWeight: 400, color: "#9F9C9C" }} className={`${roboto.className} text-[12px] lg:text-[14px]`}>{item.item.status}</h2>
                </div>
            </div>
        </a>
    )
}

export default Card;