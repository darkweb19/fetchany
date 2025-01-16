"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DatabaseViewer from "./database-viewer";

export default function Hero() {
	return (
		<section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
			<motion.h1
				className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Welcome to Fetchany
			</motion.h1>
			<motion.p
				className="text-xl mb-8 max-w-2xl text-gray-600"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Instantly populate and visualize your database content with just
				a URL. Fetchify supports all types of databases, relational and
				non-relational.
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				<h1 className="text-4xl mt-5 font-bold text-blue-900 text-center mb-8">
					See Magic?{" "}
				</h1>
				<Button size="lg">Try Fetchify Now</Button>
			</motion.div>
		</section>
	);
}
