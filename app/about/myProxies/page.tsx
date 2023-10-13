"use client"
import { useState } from "react"
import {BsFillMoonStarsFill} from "react-icons/bs"
export default function MyProxies() {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white px-10 overflow-x-hidden dark:bg-gray-900 md:px-20 lg:px-40 ">
                <nav className="py-10 mb-12 fles justify-between dark:text-white">
                    <h1 className="text-black"><BsFillMoonStarsFill 
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-4xl sm:pl-4 dar:text-white"
                    /></h1>
                </nav>
                <section>
                    <div className="dark:text-white">
                        <div className="text-center w-full shadow-lg pt-8 pb-2">
                            
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}