import React from "react"

const Menu = ({ menuOn, setMenu }) => {
    return (
        <button
            style={{ width: "24px" }}
            className="flex flex-col gap-1.5"
            onClick={e => setMenu(menuOn ^ true)}
        >
            <div className={`w-full h-1 rounded-full bg-black ${menuOn ? 'absolute rotate-135' : ''} transition duration-300`}></div>
            <div className={`w-full h-1 rounded-full bg-blue-400 ${menuOn ? 'hidden' : ''} transition duration-300`}></div>
            <div className={`w-full h-1 rounded-full bg-black ${menuOn ? 'absolute rotate-45' : ''} transition duration-300`}></div>
        </button >
    )
}


export default Menu;