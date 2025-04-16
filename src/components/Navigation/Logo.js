import Image from "next/image";
import React from "react"
import { merriweather } from "@/fonts";

const Logo = () => {
    return (
        <div className="flex flex-row gap-1">
            <Image
                src={'/bird.png'}
                height={46}
                width={45.6}
                alt="bird.png"
            />
            <h1 style={{ fontSize: "16px" }} className={`${merriweather.className} font-bold`}>
                Aviary
                <br />
                Bird
            </h1>
        </div>
    )
}

export default Logo;