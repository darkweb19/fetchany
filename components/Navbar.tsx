"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Database, ChevronDown } from "lucide-react";

const navItems = [
	{ name: "Home", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Pricing", href: "#" },
	{ name: "Contact", href: "#" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeItem, setActiveItem] = useState("Home");

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (
					scrollPosition >= sectionTop - 100 &&
					scrollPosition < sectionTop + sectionHeight - 100
				) {
					setActiveItem(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed w-full z-50 bg-white bg-opacity-70 backdrop-blur-md text-gray-800 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2">
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							<Database className="w-8 h-8" />
						</motion.div>
						<span className="text-2xl font-bold">Fetchany</span>
					</Link>
					<div className="hidden md:flex space-x-1">
						{navItems.map((item) => (
							<motion.div
								key={item.name}
								className="relative"
								whileHover={{ scale: 1.05 }}
							>
								<Link
									href={item.href}
									className={`px-3 py-2 rounded-md text-sm font-medium ${
										activeItem === item.name
											? "text-blue-800"
											: "text-gray-800"
									} hover:text-blue-800 transition-colors`}
								>
									{item.name}
								</Link>
								{activeItem === item.name && (
									<motion.div
										className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800"
										layoutId="underline"
									/>
								)}
							</motion.div>
						))}
					</div>
					<div className="hidden md:block">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
						>
							Get Started
						</motion.button>
					</div>
					<div className="md:hidden">
						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-800 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							whileTap={{ scale: 0.95 }}
						>
							<span className="sr-only">Open main menu</span>
							<ChevronDown
								className={`${
									isOpen ? "rotate-180" : "rotate-0"
								} h-6 w-6 transition-transform duration-300`}
							/>
						</motion.button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white bg-opacity-90 backdrop-blur-md"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-800 hover:bg-blue-50 transition-colors"
								>
									{item.name}
								</Link>
							))}
							<Link
								href="#"
								className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors"
							>
								Get Started
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
