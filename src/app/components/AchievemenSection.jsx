"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
	() => {
		return import("react-animated-numbers");
	},
	{ ssr: false }
);

const achievementsList = [
	{
		metric: "Projects",
		value: "100",
		postfix: "+",
	},
	{
		prefix: "~",
		metric: "Users",
		value: "100,000",
	},
	{
		metric: "Award",
		value: "7",
	},
	{
		metric: "Years",
		value: "5",
	},
];

const AchievemenSection = () => {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16">
			<div className="border border-black rounded-md p-11 flex flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4"
						>
							<h2 className="text-4xl font-bold flex flex-row">
								{achievement.prefix}
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(achievement.value)}
									locale="en-US"
									className="text-4xl font-bold"
									configs={(_, index) => {
										return {
											mass: 1,
											friction: 100,
											tensions: 140 * (index + 1),
										};
									}}
								/>
								{achievement.postfix}
							</h2>
							<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AchievemenSection;
