
import { roboto } from "@/fonts";
import React from "react"

const SeeAll = ({ name, link }) => {
    return (
        <a href={link} style={{ fontWeight: 400 }} className={`underline hover:underline lg:no-underline ${roboto.className} text-[14px]`}>{name}</a>
    )
}

export default SeeAll;