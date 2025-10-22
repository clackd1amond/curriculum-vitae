import { CodeXmlIcon, FileDown, Globe2Icon, LanguagesIcon, MailIcon, MapPinIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import ContactItem from "../../ui/ContactItem";
import PatternLine from "../../ui/PatternLine";
import SocialLink from "../../ui/SocialLink";
import SectionWrapper from "../SectionWrapper";

async function ContactsSection() {
	const t = await getTranslations("contacts");

	return (
		<SectionWrapper id="contacts">
			<div className="flex flex-col gap-2 p-4">
				<ContactItem
					icon={CodeXmlIcon}
					text={t.rich("position", {
						link: chunks => <a href="https://www.malovnycha.com">{chunks}</a>
					})}
				/>
				<ContactItem icon={MapPinIcon} text={t("location")} />
				<ContactItem icon={LanguagesIcon} text={t("languages")} />
				<ContactItem
					icon={MailIcon}
					text={t.rich("email", {
						link: chunks => <a href="mailto:yevhenc@malovnycha.com">{chunks}</a>
					})}
				/>
				<ContactItem
					icon={Globe2Icon}
					text={t.rich("website", {
						link: chunks => (
							<a target="_blank" href="https://www.malovnycha.com">
								{chunks}
							</a>
						)
					})}
				/>
				<ContactItem
					icon={FileDown}
					text={t.rich("resume", {
						link: chunks => (
							<a download href="/cv_yevhen.pdf">
								{chunks}
							</a>
						)
					})}
				/>
			</div>
			<PatternLine className="border-t" />

			<div className="divide-edge grid grid-cols-1 max-md:divide-y md:grid-cols-3 md:divide-x">
				<SocialLink
					icon={FaLinkedinIn}
					className="bg-[#0077b5] text-white"
					title="LinkedIn"
					username="eugene-norm"
					url="https://www.linkedin.com/in/eugene-norm/"
				/>
				<SocialLink
					icon={FaGithub}
					className="bg-[#121412] text-white"
					title="GitHub"
					username="clackd1amond"
					url="https://github.com/clackd1amond"
				/>
				<SocialLink
					icon={RiTelegram2Fill}
					className="bg-[#24a1de] text-white"
					title="Telegram"
					username="@eugene_norm"
					url="https://t.me/eugene_norm"
				/>
			</div>
		</SectionWrapper>
	);
}

export default ContactsSection;
