
import { merriweather, roboto } from "@/fonts";
import React, { useEffect } from "react"

const Profile = (item) => {
    return (
        <a href={item.item.address} className="flex flex-row items-center gap-2">
            <img src={item.item.link} className={`rounded-full w-[50px] h-[50px] lg:w-[79px] lg:h-[79px] object-cover shrink-0`}></img>
            <div className="flex flex-col">
                <h1 style={{ fontWeight: 600 }} className={`${roboto.className} text-[16px] lg:text-[24px]`}>{item.item.name}</h1>
                <h2 style={{ fontWeight: 400, color: "#9F9C9C" }} className={`${roboto.className} text-[14px] lg:text-[18px]`}>{item.item.activity}</h2>
            </div>
        </a>
    )
}

export default Profile;