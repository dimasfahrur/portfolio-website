import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyle = isSelected
		? "text-black bg-white"
		: "text-[#ADB7BE] border-slate-300 hover:border-black";

	return (
		<button
			className={`${buttonStyle} rounded-full border-2 border-secondary-400 px-5 py-2 text-xl cursor-pointer`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
