import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
// import jashwanth from "../public/jashwanth.png"
import { SiReplit } from "react-icons/si";

const Home: NextPage = () => {
	const [darkMode, setDarkMode] = useState(true)
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Sarvesh the E Monkey</title>
				<link rel="icon" href="/jashwanth.png" />
			</Head>

			<main className="bg-white px-10 overflow-x-hidden dark:bg-gray-900 md:px-20 lg:px-40 ">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between dark:text-white">
						<h1 className="text-xl sm:text-small pr-4  md:text-xl ml-1  ">TheCleverCoder777</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className=" cursor-pointer text-4xl sm:pl-4 "
								/>
							</li>
							<li><a href="#" className=" bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5">Resume</a></li>
						</ul>
					</nav>
					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">V.K. Jashwanth</h2>
						<h3 className="text-2xl py-2 pb-4 pt-5 dark:text-white md:text-3xl whitespace-nowrap">Front-End-Developer</h3>
						<p className="text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-xl">Python, HTML/CSS/JS, React, NextJS, TailwindCSS, NodeJS, ExpressJS, and Typescript</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
						<a href="https://www.linkedin.com/in/jashwanth-viswanath-karanam-308634260/" target="_blank" className="hover:brightness-150 hover:shadow-xl"><AiFillLinkedin /></a>
						<a href="https://github.com/VKJashwanth" target="_blank" className="hover:brightness-150 hover:shadow-xl"><AiFillGithub /></a>
						<a href="https://replit.com/@VKJashwanth" target="_blank" className="hover:brightness-150 hover:shadow-xl"><SiReplit /></a>
					</div>
					<div className="relative mx-auto bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full w-80 h-82 mt-20 overflow-hidden">
						{/* <Image src={jashwanth} /> */}
					</div>
				</section>
				<section>
					<div className="bg-white text-center dark:bg-gray-900">
						<h2 className="text-3xl py-1 dark:text-white pt-9 pb-5 ">About Me:</h2>
						<p className="text-md py-2 leading-8 dark:text-gray-200  ">Currently, I am in <span className="text-teal-500">8th grade</span> and enjoy coding and creating projects. I have also created several websites and web applications. I am excited to continue learning and creating more projects in the future. I am learning <span className="text-teal-500">React and NextJS</span> and look forward to creating more complex projects with this language. Join me down below and let's get working! I am also eager to apply my knowledge and skills in this field to help make a difference in the world. I am passionate about creating products that can have a <span className="text-teal-500">positive impact</span> on society, and I believe that coding is the way to do it! Let's get coding!</p>
					</div>
					<div className="dark:text-white">
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<h1 className="text-lg font-medium pt-8 pb-2">Beautiful WebPages</h1>
							<p className="text-gray-800 py-1 dark:text-gray-200">Creating elegant designs suited for your webpage.</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<h1 className="text-lg font-medium pt-8 pb-2">Consulting</h1>
							<p className="text-gray-800 py-1 dark:text-gray-200">Are you interested in feedback for your current project? I can give you tips and tricks to level up!</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<h1 className="text-lg font-medium pt-8 pb-2"> Code your dream project </h1>
							<p className="text-gray-800 py-1 dark:text-gray-200">Do you have an idea for your next great website? Let's make it a <span className="text-teal-500">reality</span>.</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<h1 className="text-lg font-medium p-15">Websites I use to Code</h1>

							<div>
								<a className="text-gray-800 py-1 dark:text-gray-200 bg-gradient-to-r from-cyan-500 to-teal-500 border-none rounded-md ml-8 cursor-pointer p-15" href="https://replit.com/" target="_blank">Repl.it</a>
							</div>

							<div className="mt-5">
								<a className="text-gray-800 py-1 dark:text-gray-200 bg-gradient-to-r from-cyan-500 to-teal-500 border-none rounded-md ml-8 cursor-pointer p-15 " href="https://codesandbox.io/" target="_blank">CodeSandBox.io</a>
							</div>



						</div>

					</div>
				</section>
				<section className="bg-white dark:bg-gray-900">
					<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
						<nav className="flex flex-wrap justify-center -mx-5 -my-2">
							<div className="px-5 py-2">
								<a href="mailto:vk.vkjashwanth@gmail.com" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
									Contact
								</a>
							</div>
							<div className="px-5 py-2">
								<a href="https://www.termsfeed.com/live/7ac255ff-24ac-48ab-ac64-534a48f94acd" target="_blank" className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
									Terms
								</a>
							</div>
						</nav>
						<div className="flex justify-center mt-8 space-x-6">



							<a href="https://github.com/VKJashwanth" className="text-gray-400 hover:text-gray-500 ">
								<span className="sr-only">GitHub</span>
								<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
									<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
								</svg>
							</a>
							<a href="https://dribbble.com/TheCleverCoder777" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
								<span className="sr-only">Dribbble</span>
								<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
									<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
								</svg>
							</a>
						</div>
						<p className="mt-8 text-base leading-6 text-center text-gray-400">
							© 2023 <a href="https://jashwanthvk.vkjashwanth.repl.co" className='hover:underline hover:text-gray'>Jashwanth Viswanath Karanam.</a> All rights reserved.
						</p>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Home