
import { roboto } from "@/fonts";
import React from "react"

const ActitvityButton = (link) => {
    return (
        <a style={{ fontSize: "16px" }} className={`hover:bg-blue-400 hover:border-blue-400 hover:text-white border border-1 pl-4 pr-4 rounded-full border-black ${roboto.className}`} href={link.link.address} >
            {link.link.name}
        </a >
    )
}

export default ActitvityButton;