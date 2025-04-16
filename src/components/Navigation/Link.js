
import { merriweather } from "@/fonts";
import React from "react"

const Link = (link) => {
    return (
        <a style={{ fontSize: "16px" }} className={`font-bold transition duration-300 hover:underline hover:decoration-1 hover:underline-offset-6 ${merriweather.className}`} href={link.link.address} >
            {link.link.name}
        </a >
    )
}

export default Link;