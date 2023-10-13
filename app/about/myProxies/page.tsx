"use client"
import { useState } from "react"
export default function MyProxies() {
    const [dark, setDarkMode] = useState(true)
    return (
        <div className={dark ? "dark" : ""}>
            <main className="bg-white px-10 overflow-x-hidden dark:bg-gray-900 md:px-20 lg:px-40 ">
                <section>
                    <div className="dark:text-white">
                        <div className="text-center shadow-lg pt-8 pb-2"></div>
                    </div>
                </section>
            </main>
        </div>
    )
}