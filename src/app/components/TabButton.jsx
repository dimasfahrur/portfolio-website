import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active ? 'border-b border-cyan-400' : 'text-slate-600';
	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
