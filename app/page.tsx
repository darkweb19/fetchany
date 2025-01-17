import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import DatabaseViewer from "@/components/database-viewer";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PricingPlans from "@/components/PricingPlans";
import Reviews from "@/components/Reviews";

export default function Home() {
	return (
		// <main className="container mx-auto py-10 px-4 min-h-screen">
		//   <h1 className="text-4xl font-bold text-center mb-8">
		//     Database Viewer
		//   </h1>
		//   <DatabaseViewer />
		// </main>
		<main className="min-h-screen bg-white">
			<Navbar />
			<div className="pt-16">
				{" "}
				{/* Add padding top to account for fixed navbar */}
				<section id="Home">
					<Hero />
					<DatabaseViewer />
				</section>
				<section id="Features">
					<HowItWorks />
				</section>
				<section id="CTA">
					<CTA />
				</section>
				<section id="Reviews">
					<Reviews />
				</section>
				<section id="Pricing">
					<PricingPlans />
				</section>
				<section id="FAQ">
					<FAQ />
				</section>
				<section id="Contact">
					<ContactForm />
				</section>
				<Footer />
			</div>
		</main>
	);
}
