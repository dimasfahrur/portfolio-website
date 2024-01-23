'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectData = [
	{
		id: 1,
		title: 'React Portfolio Website',
		description: 'Payna Website',
		image: '/images/projects/payna-app.png',
		tag: ['ALL', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 2,
		title: 'React Portfolio Website',
		description: 'Payna Website',
		image: '/images/projects/payna-app.png',
		tag: ['ALL', 'Web'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 3,
		title: 'React Portfolio Website',
		description: 'Payna Website',
		image: '/images/projects/payna-app.png',
		tag: ['ALL', 'UI/UX'],
		gitUrl: '/',
		previewUrl: '/',
	},
];

const ProjectSection = () => {
	const [tag, setTag] = useState('ALL');

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<>
			<h2
				className='text-center text-4xl font-bold mt-4 mb-8 md:mb-12'
				id='projects'
			>
				My Project
			</h2>
			<div className='flex flex-row justify-center items-center gap-2 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='ALL'
					isSelected={tag === 'ALL'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web'
					isSelected={tag === 'Web'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='UI/UX'
					isSelected={tag === 'UI/UX'}
				/>
			</div>
			<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						tags={project}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectSection;
