import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
		>
			<div>
				<h5 className="text-xl font-bold my-2">Let&#39;s Connect</h5>
				<p className="text-slate-500 mb-4 max-w-md">
					I&#39;m currently looking for new opportunities, my inbox is always
					open, Whether you have question or just want to say hi, I&#39;ll try
					my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2 text-black">
					<Link href="https://github.com/dimasfahrur">
						<Image
							src={GithubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/dimasfahrur/">
						<Image
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
			</div>
			{/* <div>
				<form className="flex flex-col">
					<div></div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-sm mb-2 font-medium"
						>
							Your Email
						</label>
						<input
							type="email"
							id="email"
							required
							className="bg-slate-200 border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
							placeholder="your@email.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="block text-sm mb-2 font-medium"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							required
							className="bg-slate-200 border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
							placeholder="Just saying hi!"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							className="bg-slate-200 border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
							placeholder="Lets talk about..."
						/>
					</div>
					<button
						type="submit"
						className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send a Message
					</button>
				</form>
			</div> */}
		</section>
	);
};

export default EmailSection;
