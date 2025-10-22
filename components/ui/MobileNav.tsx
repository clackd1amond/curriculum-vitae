"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./DropdownMenu";

function MobileNav({ navLinks }: { navLinks: { title: string; href: string }[] }) {
	const [open, setOpen] = useState<boolean>(false);

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div id="mobile-nav" className="lg:hidden">
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						className="group"
						aria-expanded={open}
						aria-label={open ? "Close menu" : "Open menu"}
						size="icon"
					>
						<svg
							className="pointer-events-none"
							width={16}
							height={16}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 12L20 12"
								className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
							/>
							<path
								d="M4 12H20"
								className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
							/>
							<path
								d="M4 12H20"
								className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
							/>
						</svg>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{navLinks.map((link, index) => (
						<DropdownMenuItem key={index} onClick={() => handleNavClick(link.href)}>
							{link.title}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

export default MobileNav;
