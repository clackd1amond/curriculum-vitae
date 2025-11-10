import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CertificatesSection from "@/components/layout/sections/CertificatesSection";
import ContactsSection from "@/components/layout/sections/ContactsSection";
import ExperienceSection from "@/components/layout/sections/ExperienceSection";
import HeroSection from "@/components/layout/sections/HeroSection";
import PrefooterSection from "@/components/layout/sections/PrefooterSection";
import ProjectsSection from "@/components/layout/sections/ProjectsSection";
import StackSection from "@/components/layout/sections/StackSection";
import ToolsSection from "@/components/layout/sections/ToolsSection";
import Background from "@/components/ui/Background";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;

	setRequestLocale(locale as Locale);

	return (
		<div className="relative min-h-screen font-sans">
			<Background />
			<ScrollToTop />

			<main className="relative z-10">
				<Header />
				<HeroSection />
				<ContactsSection />
				<StackSection />
				<ProjectsSection />
				<ToolsSection />
				<ExperienceSection />
				<CertificatesSection />
				<PrefooterSection />
				<Footer />
			</main>
		</div>
	);
}
