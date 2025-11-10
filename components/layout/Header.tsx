import { getTranslations } from "next-intl/server";
import HeaderBackdrop from "../ui/HeaderBackdrop";
import LocaleSwitcher from "../ui/LocaleSwitcher";
import Avatar from "../ui/MainAvatar";
import MobileNav from "../ui/MobileNav";
import NavItem from "../ui/NavItem";
import ThemeSwitcher from "../ui/ThemeSwitcher";

async function Header() {
	const t = await getTranslations();

	const navLinks = [
		{
			title: t("stack.title"),
			href: "#stack"
		},
		{
			title: t("projects.title"),
			href: "#projects"
		},
		{
			title: t("experience.title"),
			href: "#experience"
		},
		{
			title: t("certificates.title"),
			href: "#certificates"
		}
	];

	return (
		<header className="sticky top-0 z-50 w-full">
			<HeaderBackdrop />
			<div className="border-edge relative mx-auto flex w-full max-w-3xl items-center justify-end gap-4 border-x px-4 py-2">
				<div className="flex-grow">
					<Avatar />
				</div>

				<nav id="desktop-nav">
					<ul className="flex items-center justify-between gap-4 py-4 max-lg:hidden">
						{navLinks.map((link, index) => (
							<NavItem key={index} href={link.href} title={link.title} />
						))}
					</ul>
				</nav>
				<ThemeSwitcher />
				<LocaleSwitcher />
				<MobileNav navLinks={navLinks} />
			</div>
		</header>
	);
}

export default Header;
