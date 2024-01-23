import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyle = isSelected
		? 'text-black bg-cyan-400'
		: 'text-[#ADB7BE] border-slate-400 hover:border-black';

	return (
		<button
			className={`${buttonStyle} rounded-full border-2 px-5 py-2 text-xl cursor-pointer`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
