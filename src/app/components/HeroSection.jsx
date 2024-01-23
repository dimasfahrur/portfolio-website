'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
	return (
		<section className='grid grid-cols-1 sm:grid-cols-12 my-8'>
			<div className='col-span-7 place-self-center text-center sm:text-left md:pr-4'>
				<h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
					<span className='text-transparent bg-clip-text bg-cyan-400'>
						Hello, I&#39;m{' '}
					</span>
					<br></br>
					<TypeAnimation
						sequence={[
							'Dimas',
							1000,
							'Web Developer',
							1000,
							'Front-End Developer',
							1000,
						]}
						wrapper='span'
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className='text-base text-slate-500 sm:text-lg mb-6 lg:text-xl'>
					My interest is building a website, i want to build my digital product
					through web development. as student at Jember University, I also learn
					bussiness and leadership.
				</p>
				<div>
					<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-cyan-400 hover:bg-cyan-700 text-white'>
						Hire Me
					</button>
					<button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-cyan-700 hover:text-white hover:border-cyan-700 border-4 border-cyan-400 mt-3'>
						Download CV
					</button>
				</div>
			</div>
			<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
				<div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
					<Image
						src='/images/hero-image.png'
						alt='hero image'
						className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						width={400}
						height={400}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
