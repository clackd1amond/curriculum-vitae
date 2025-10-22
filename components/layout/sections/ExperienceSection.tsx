import ExperienceItem from "@/components/ui/ExperienceItem";
import {
	BadgeDollarSignIcon,
	BookMarkedIcon,
	CodeXmlIcon,
	ContainerIcon,
	GraduationCapIcon,
	ServerIcon,
	Users2Icon
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Fragment } from "react";
import PatternLine from "../../ui/PatternLine";
import SectionWrapper from "../SectionWrapper";

async function ExperienceSection() {
	const t = await getTranslations("experience");

	const experience = [
		{
			sectionTitle: t("items.malovnycha.title"),
			isActive: true,
			items: [
				{
					title: t("items.malovnycha.items.full-stack-developer.title"),
					description: t("items.malovnycha.items.full-stack-developer.description"),
					date: t("items.malovnycha.items.full-stack-developer.date"),
					icon: CodeXmlIcon
				},
				{
					title: t("items.malovnycha.items.director.title"),
					description: t("items.malovnycha.items.director.description"),
					date: t("items.malovnycha.items.director.date"),
					icon: Users2Icon
				}
			]
		},
		{
			sectionTitle: t("items.vip-media.title"),
			isActive: false,
			items: [
				{
					title: t("items.vip-media.items.frontend-developer-full-time.title"),
					description: t("items.vip-media.items.frontend-developer-full-time.description"),
					date: t("items.vip-media.items.frontend-developer-full-time.date"),
					icon: CodeXmlIcon
				},
				{
					title: t("items.vip-media.items.frontend-developer-part-time.title"),
					description: t("items.vip-media.items.frontend-developer-part-time.description"),
					date: t("items.vip-media.items.frontend-developer-part-time.date"),
					icon: CodeXmlIcon
				},
				{
					title: t("items.vip-media.items.dev-ops-part-time.title"),
					description: t("items.vip-media.items.dev-ops-part-time.description"),
					date: t("items.vip-media.items.dev-ops-part-time.date"),
					icon: ContainerIcon
				},
				{
					title: t("items.vip-media.items.dev-ops-full-time.title"),
					description: t("items.vip-media.items.dev-ops-full-time.description"),
					date: t("items.vip-media.items.dev-ops-full-time.date"),
					icon: ContainerIcon
				}
			]
		},
		{
			sectionTitle: t("items.kaiser.title"),
			isActive: false,
			items: [
				{
					title: t("items.kaiser.items.web-developer.title"),
					description: t("items.kaiser.items.web-developer.description"),
					date: t("items.kaiser.items.web-developer.date"),
					icon: CodeXmlIcon
				},
				{
					title: t("items.kaiser.items.system-administrator.title"),
					description: t("items.kaiser.items.system-administrator.description"),
					date: t("items.kaiser.items.system-administrator.date"),
					icon: ServerIcon
				},
				{
					title: t("items.kaiser.items.sales-manager.title"),
					description: t("items.kaiser.items.sales-manager.description"),
					date: t("items.kaiser.items.sales-manager.date"),
					icon: BadgeDollarSignIcon
				}
			]
		},
		{
			sectionTitle: t("items.education.title"),
			isActive: false,
			items: [
				{
					title: t("items.education.items.university.title"),
					description: t("items.education.items.university.description"),
					date: t("items.education.items.university.date"),
					icon: GraduationCapIcon
				},
				{
					title: t("items.education.items.middle-school-full.title"),
					description: t("items.education.items.middle-school-full.description"),
					date: t("items.education.items.middle-school-full.date"),
					icon: BookMarkedIcon
				},
				{
					title: t("items.education.items.middle-school.title"),
					description: t("items.education.items.middle-school.description"),
					date: t("items.education.items.middle-school.date"),
					icon: BookMarkedIcon
				}
			]
		}
	];

	return (
		<SectionWrapper title={t("title")} id="experience">
			{experience.map((item, index) => (
				<Fragment key={index}>
					<ExperienceItem {...item} />
					{index !== experience.length - 1 ? (
						<PatternLine className="border-t" patternClassName="pattern-diagonal-lines" />
					) : null}
				</Fragment>
			))}
		</SectionWrapper>
	);
}

export default ExperienceSection;
