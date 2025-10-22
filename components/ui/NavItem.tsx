"use client";

interface NavItemProps {
	title: string;
	href: string;
}

function NavItem({ title, href }: NavItemProps) {
	const handleNavClick = () => {
		const element = document.querySelector(href);
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<li
			onClick={handleNavClick}
			className="decoration-edge cursor-pointer font-mono text-sm decoration-dashed underline-offset-4 hover:underline"
		>
			{title}
		</li>
	);
}

export default NavItem;
