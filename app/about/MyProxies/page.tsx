"use client"
import Link from "next/link"
import { useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs"
export default function MyProxies() {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className={darkMode ? "dark" : ""}> 
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="text-xl sm:text-small pr-4 md:text-xl ml-1">My Proxies</h1>
                <ul className="flex items-center">
                    <li>
                        <BsFillMoonStarsFill 
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-4xl sm:pl-4"
                        />
                    </li>
                    <li>
                        <Link href={"/"} className=" bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}