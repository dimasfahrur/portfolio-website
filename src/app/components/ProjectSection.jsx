"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
	{
		id: 1,
		title: "Payna Website",
		description: "Landing page use React, Next.Js, and TailwindCSS",
		image: "/images/projects/payna-app.png",
		tag: ["ALL", "Web"],
		gitUrl: "https://github.com/dimasfahrur/payna-app",
		previewUrl: "https://payna-app.vercel.app/",
	},
	{
		id: 2,
		title: "Semina Website (Back-End)",
		description: "This is an API use MongoDB, Express Js, and Node JS",
		image: "/images/projects/semina-web.png",
		tag: ["ALL", "Web"],
		gitUrl: "https://github.com/dimasfahrur/server-semina-bootcamp-2",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "Travelo Website",
		description: "This landing website use React, Next, and TailwindCSS",
		image: "/images/projects/travelo-app.png",
		tag: ["ALL", "Web"],
		gitUrl: "https://github.com/dimasfahrur/travelo-app",
		previewUrl: "https://travelo-app-three.vercel.app/",
	},
	{
		id: 4,
		title: "Reading App",
		description:
			"Application design for reading app, this app can empower people to access books from anywhere",
		image: "/images/projects/reading-app.png",
		tag: ["ALL", "UI/UX"],
		gitUrl: "/",
		previewUrl:
			"https://www.figma.com/design/3tHOeXDPYI2Y0uKfuZDmCX/Reading-Apps?node-id=0-1&t=YH96UVJnhTJTych6-1",
	},
];

const ProjectSection = () => {
	const [tag, setTag] = useState("ALL");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section ref={ref}>
			<h2
				className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12"
				id="projects"
			>
				My Project
			</h2>
			<div className="flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="ALL"
					isSelected={tag === "ALL"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="UI/UX"
					isSelected={tag === "UI/UX"}
				/>
			</div>
			<ul className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							tags={project}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectSection;
