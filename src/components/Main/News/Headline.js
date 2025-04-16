
import { roboto } from "@/fonts";
import React from "react"

const Headline = (item) => {
    return (
        <a href={item.item.address} className="flex flex-row items-start gap-2 hover:bg-gray-300 pt-2 pb-2">
            <img src={item.item.link} className={`rounded-md w-[96px] h-[64px] lg:w-[245px] lg:h-[130px] object-cover shrink-0`}></img>
            <div className="flex flex-col">
                <h1 style={{ fontWeight: 600 }} className={`${roboto.className} text-[16px] lg:text-[24px]`}>{item.item.title}</h1>
                <h2 style={{ fontWeight: 400, color: "#9F9C9C" }} className={`${roboto.className} text-[14px] lg:text-[18px]`}>{item.item.description}</h2>
            </div>
        </a>
    )
}

export default Headline;