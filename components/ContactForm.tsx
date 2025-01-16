"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically handle the form submission
		// For this example, we'll just set isSubmitted to true
		setIsSubmitted(true);
	};

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					className="max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl font-bold text-center mb-8">
						Get in Touch
					</h2>
					<p className="text-center text-gray-600 mb-12">
						Have questions about Fetchify? We're here to help. Fill
						out the form below and we'll get back to you as soon as
						possible.
					</p>
					{isSubmitted ? (
						<motion.div
							className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<p className="text-center">
								Thank you for your message. We'll be in touch
								soon!
							</p>
						</motion.div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Your name"
									required
								/>
							</div>
							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="your@email.com"
									required
								/>
							</div>
							<div>
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="Your message"
									required
								/>
							</div>
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
