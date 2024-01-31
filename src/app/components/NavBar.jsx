"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLink = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90">
			<div className="flex flex-wrap items-center justify-between mx-auto px-8 py-3">
				<Link
					href={"/"}
					className="text-5xl font-semibold"
				>
					<Image
						src="/images/web-logo.png"
						alt="web logo"
						width={60}
						height={60}
					/>
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-slate-600 border-slate-200 hover:text-cyan-400 hover:border-cyan-400"
							onClick={() => setNavbarOpen(true)}
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-slate-600 border-slate-200 hover:text-cyan-400 hover:border-cyan-400"
							onClick={() => setNavbarOpen(false)}
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div
					className="menu hidden md:block md:w-auto"
					id="navbar"
				>
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLink.map((link, index) => (
							<li key={index}>
								<NavLink
									href={link.path}
									title={link.title}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLink} /> : null}
		</nav>
	);
};

export default NavBar;
