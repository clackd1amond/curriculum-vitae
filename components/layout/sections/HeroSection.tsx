import avatar from "@/assets/avatar/photo2.jpeg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import PatternLine from "../../ui/PatternLine";
import RotatingText from "../../ui/RotatingText";
import SectionWrapper from "../SectionWrapper";

async function HeroSection() {
	const t = await getTranslations("hero");

	return (
		<SectionWrapper id="hero">
			<div className="flex gap-4 px-4 py-8 max-md:flex-col max-md:items-center sm:gap-6 sm:px-6 sm:py-12 md:items-end md:py-16 lg:gap-8 lg:px-8 lg:py-12">
				<Image src={avatar} alt="" className="size-32 rounded-full object-cover md:size-40" />

				<div className="flex flex-col max-md:items-center">
					<h1 className="mb-1 text-3xl tracking-tight sm:mb-3 sm:text-4xl md:text-5xl">{t("title")}</h1>

					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-4xl">
						<span className="flex items-center gap-2 bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
							<RotatingText
								texts={[
									t("rotating.frontend"),
									t("rotating.backend"),
									t("rotating.fullstack"),
									t("rotating.mobile"),
									t("rotating.ui"),
									t("rotating.nextjs"),
									t("rotating.react"),
									t("rotating.react-native"),
									t("rotating.typescript"),
									t("rotating.wordpress"),
									t("rotating.opencart")
								]}
								mainClassName="justify-center overflow-hidden rounded-xl bg-[#b39ddb] px-2 py-0.5 text-black sm:px-2 sm:py-1 md:px-3 md:py-2 dark:bg-[#2a5d77] dark:text-white"
								staggerFrom={"last"}
								initial={{ y: "100%" }}
								animate={{ y: 0 }}
								exit={{ y: "-120%" }}
								staggerDuration={0.025}
								splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
								transition={{ type: "spring", damping: 30, stiffness: 400 }}
								rotationInterval={2000}
							/>{" "}
							{t("developer")}
						</span>
					</h2>
				</div>
			</div>
			<PatternLine className="border-t" />
			<div className="flex items-end gap-4 px-4 py-8 sm:gap-6 sm:px-6 sm:py-12 md:py-16 lg:gap-8 lg:px-8 lg:py-12">
				<p>{t("description")}</p>
			</div>
		</SectionWrapper>
	);
}

export default HeroSection;
