import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-100 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h3 className="text-xl font-bold text-blue-500">
							Fetchany
						</h3>
						<p className="text-sm text-gray-600">
							Simplifying database management
						</p>
					</div>
					<nav className="flex flex-wrap justify-center md:justify-end gap-4">
						<Link
							href="#"
							className="text-sm text-gray-600 hover:text-blue-500"
						>
							Home
						</Link>
						<Link
							href="#Features"
							className="text-sm text-gray-600 hover:text-blue-500"
						>
							Features
						</Link>
						<Link
							href="#Pricing"
							className="text-sm text-gray-600 hover:text-blue-500"
						>
							Pricing
						</Link>
						<Link
							href="#Contact"
							className="text-sm text-gray-600 hover:text-blue-500"
						>
							Contact
						</Link>
					</nav>
				</div>
				<div className="mt-8 flex justify-center space-x-6">
					<Link
						href="#"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">GitHub</span>
						<Github className="h-6 w-6" />
					</Link>
					<Link
						href="#"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Twitter</span>
						<Twitter className="h-6 w-6" />
					</Link>
					<Link
						href="#"
						className="text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">LinkedIn</span>
						<Linkedin className="h-6 w-6" />
					</Link>
				</div>
				<p className="mt-8 text-center text-sm text-gray-500">
					© {new Date().getFullYear()} Fetchify. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
