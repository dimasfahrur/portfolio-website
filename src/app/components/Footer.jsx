import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent '>
			<div className='container p-8 flex justify-between items-center'>
				<Image
					src='/images/web-logo.png'
					alt='web logo'
					width={40}
					height={40}
				/>
				<p className='text-slate-500'>All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
