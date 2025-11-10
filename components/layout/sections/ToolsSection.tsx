import davinciResolveIcon from "@/assets/tools/davinci_resolve.png";
import excelIcon from "@/assets/tools/excel.svg";
import googleIcon from "@/assets/tools/google.svg";
import jiraIcon from "@/assets/tools/jira.svg";
import powerPointIcon from "@/assets/tools/power_point.svg";
import premiereIcon from "@/assets/tools/premiere.svg";
import trelloIcon from "@/assets/tools/trello.svg";
import wordIcon from "@/assets/tools/word.svg";
import ToolItem from "@/components/ui/ToolItem";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../SectionWrapper";

async function ToolsSection() {
	const t = await getTranslations("tools");
	return (
		<SectionWrapper title={t("title")} id="tools">
			<div className="divide-edge grid grid-cols-1 max-md:divide-y md:grid-cols-3 md:divide-x">
				<ToolItem
					icons={[
						{ image: wordIcon.src, fallback: "W" },
						{ image: excelIcon.src, fallback: "E" },
						{ image: powerPointIcon.src, fallback: "PP" }
					]}
					title={t("items.microsoft.title")}
					desc={t("items.microsoft.description")}
				/>
				<ToolItem
					icons={[
						{ image: davinciResolveIcon.src, fallback: "DR" },
						{ image: premiereIcon.src, fallback: "P" }
					]}
					title={t("items.davinci.title")}
					desc={t("items.davinci.description")}
				/>
				<ToolItem
					icons={[
						{ image: trelloIcon.src, fallback: "T" },
						{ image: jiraIcon.src, fallback: "J" },
						{ image: googleIcon.src, fallback: "G" }
					]}
					title={t("items.trello.title")}
					desc={t("items.trello.description")}
				/>
			</div>
		</SectionWrapper>
	);
}

export default ToolsSection;
