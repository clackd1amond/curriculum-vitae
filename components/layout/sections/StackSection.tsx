import { Affinity } from "@/components/stack/Affinity";
import { AntDesign } from "@/components/stack/AntDesign";
import { Bun } from "@/components/stack/Bun";
import { ChatGpt } from "@/components/stack/ChatGpt";
import { Convex } from "@/components/stack/Convex";
import { Expo } from "@/components/stack/Expo";
import { Figma } from "@/components/stack/Figma";
import { Git } from "@/components/stack/Git";
import { Illustrator } from "@/components/stack/Illustrator";
import { JavaScript } from "@/components/stack/JavaScript";
import { MongoDB } from "@/components/stack/MongoDB";
import { Motion } from "@/components/stack/Motion";
import { MySQL } from "@/components/stack/MySQL";
import { Nextjs } from "@/components/stack/Nextjs";
import { Nodejs } from "@/components/stack/Nodejs";
import { Photoshop } from "@/components/stack/Photoshop";
import { Php } from "@/components/stack/Php";
import { RadixUI } from "@/components/stack/RadixUI";
import { React } from "@/components/stack/React";
import { Shadcnui } from "@/components/stack/Shadcnui";
import { Supabase } from "@/components/stack/Supabase";
import { TailwindCss } from "@/components/stack/TailwindCss";
import { TypeScript } from "@/components/stack/TypeScript";
import { WordPress } from "@/components/stack/WordPress";
import StackItem from "@/components/ui/StackItem";
import { getTranslations } from "next-intl/server";
import SectionWrapper from "../SectionWrapper";

async function StackSection() {
	const t = await getTranslations("stack");

	return (
		<SectionWrapper title={t("title")} id="stack">
			<div className="pattern-diagonal-lines text-edge grid grid-cols-6 gap-4 p-4 lg:grid-cols-12">
				<StackItem image={JavaScript} name="JavaScript" />
				<StackItem image={TypeScript} name="TypeScript" />
				<StackItem image={React} name="React" />
				<StackItem image={Nextjs} name="Next.js" />
				<StackItem image={TailwindCss} name="Tailwind CSS" />
				<StackItem image={Shadcnui} name="shadcn/ui" />
				<StackItem image={RadixUI} name="Radix UI" />
				<StackItem image={Motion} name="Motion" />
				<StackItem image={Nodejs} name="Node.js" />
				<StackItem image={Expo} name="Expo" />
				<StackItem image={Bun} name="Bun Package Manager" />
				<StackItem image={Php} name="PHP" />
				<StackItem image={WordPress} name="WordPress" />
				<StackItem image={AntDesign} name="Ant Design" />
				<StackItem image={Git} name="Git" />
				<StackItem image={MySQL} name="MySQL" />
				<StackItem image={MongoDB} name="MongoDB" />
				<StackItem image={Convex} name="Convex" />
				<StackItem image={Supabase} name="Supabase" />
				<StackItem image={Figma} name="Figma" />
				<StackItem image={Affinity} name="Affinity" />
				<StackItem image={Photoshop} name="Adobe Photoshop" />
				<StackItem image={Illustrator} name="Adobe Illustrator" />
				<StackItem image={ChatGpt} name="ChatGPT" />
			</div>
		</SectionWrapper>
	);
}

export default StackSection;
