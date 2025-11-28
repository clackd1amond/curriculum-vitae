import bes from "@/assets/projects/bes.png";
import chameleonok from "@/assets/projects/chameleonok.png";
import concept from "@/assets/projects/concept.png";
import driversway from "@/assets/projects/driversway.png";
import kaiser from "@/assets/projects/kaiser.png";
import malovnycha from "@/assets/projects/malovnycha.png";
import rely from "@/assets/projects/rely.png";
import samurai from "@/assets/projects/samurai.png";
import thevictory from "@/assets/projects/thevictory.png";
import ProjectItem from "@/components/ui/ProjectItem";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../SectionWrapper";

async function ProjectsSection() {
	const t = await getTranslations("projects");

	const projects = [
		{
			image: driversway,
			title: t("items.driversway.title"),
			description: t("items.driversway.description"),
			url: "https://driversway.com.ua",
			tags: ["WordPress", "React", "Next.js", "TailwindCSS", "Nodemailer"]
		},
		{
			image: thevictory,
			title: t("items.thevictory.title"),
			description: t("items.thevictory.description"),
			url: "https://thevictory.org.ua",
			tags: ["WordPress", "TailwindCSS", "One-time donations", "Recurring donations", "Custom CRM system"]
		},
		{
			image: samurai,
			title: t("items.samurai.title"),
			description: t("items.samurai.description"),
			url: "https://last-samurai.com.ua",
			tags: ["WordPress", "React", "Next.js", "TailwindCSS"]
		},
		{
			image: chameleonok,
			title: t("items.chameleonok.title"),
			description: t("items.chameleonok.description"),
			url: "https://chameleonok.com.ua",
			tags: ["WordPress", "TailwindCSS"]
		},
		{
			image: bes,
			title: t("items.bes.title"),
			description: t("items.bes.description"),
			url: "https://bes-ua.com",
			tags: ["WordPress", "TailwindCSS"]
		},
		{
			image: rely,
			title: t("items.rely.title"),
			description: t("items.rely.description"),
			url: "https://rely.fund",
			tags: ["WordPress", "TailwindCSS"]
		},
		{
			image: malovnycha,
			title: t("items.malovnycha.title"),
			description: t("items.malovnycha.description"),
			url: "https://malovnycha.com",
			tags: ["WordPress", "TailwindCSS", "Nodemailer", "React Hook Form"]
		},
		{
			image: kaiser,
			title: t("items.kaiser.title"),
			description: t("items.kaiser.description"),
			url: "https://kaiser.com.ua",
			tags: ["OpenCart", "OCStore"]
		},
		{
			image: concept,
			title: t("items.concept.title"),
			description: t("items.concept.description"),
			url: "https://my-concept.com.ua",
			tags: ["WordPress", "WooCommerce", "Flatsome"]
		}
	];

	return (
		<SectionWrapper title={t("title")} id="projects">
			<div className="divide-edge flex flex-col divide-y">
				{projects.map((project, index) => (
					<ProjectItem key={index} {...project} linkLabel={t("visit")} />
				))}
			</div>
		</SectionWrapper>
	);
}

export default ProjectsSection;
