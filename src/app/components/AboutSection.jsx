"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>React.js</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
				<li>Mongoose</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Jember University, Indonesia</li>
			</ul>
		),
	},
	{
		title: "Work Experience",
		id: "work-exp",
		content: (
			<ul className="list-disc pl-2">
				<h3 className="font-semibold">
					Dinas Perindustrian dan Perdagangan (Feb-Jun 2023)
				</h3>
				<ul className="pl-4 list-disc">
					<li>
						Managing price list of staple foods in 28 markets in Jember district
						to be reported to BPS
					</li>
					<li>
						Manage official goverment documents according to the year of theri
						creation and create official goverment letters
					</li>
					<li>Documented the Pasar Murah event held in 22 districts</li>
				</ul>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-section.png"
					alt="about image"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I currently focusing to improve my programming skill especially for
						web development. I have experience in back-end development. I
						specialize in creating dynamic web applications using HTML, CSS,
						JavaScript, and MongoDb. I am also familiar with server-side
						technologies such as Node.js and Express.
					</p>
					<div className="flex flex-row mt-8 justify-start">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("work-exp")}
							active={tab === "work-exp"}
						>
							Work Experience
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
