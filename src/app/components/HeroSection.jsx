"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-12 my-8">
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="col-span-7 place-self-center text-center sm:text-left md:pr-4"
			>
				<h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">
						Hello, I&#39;m{" "}
					</span>
					<br></br>
					<TypeAnimation
						sequence={[
							"Dimas",
							1000,
							"Web Developer",
							1000,
							"Front-End Developer",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-base text-slate-500 sm:text-lg mb-6 lg:text-xl">
					My interest is building a website, i want to build my digital product
					through web development. as student at Jember University, I also learn
					bussiness and leadership.
				</p>
				<div>
					<Link href="#contact">
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary-500 to-secondary-400 hover:bg-black text-white">
							Hire Me
						</button>
					</Link>
					<Link href="https://bit.ly/CV_DIMASFR">
						<button className="px-6 py-2 w-full sm:w-fit rounded-full bg-transparent hover:bg-secondary-400 hover:text-white hover:border-secondary-400 border-4 border-cyan-400 mt-3">
							Download CV
						</button>
					</Link>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="col-span-5 place-self-center mt-4 lg:mt-0"
			>
				<div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
					<Image
						src="/images/hero-image.png"
						alt="hero image"
						className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						width={400}
						height={400}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
