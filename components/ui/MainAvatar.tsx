"use client";

import avatar from "@/assets/avatar/memoji_portrait.png";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useState } from "react";

function Avatar() {
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", latest => {
		setCurrentScrollY(latest);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<div
			className={cn(
				"relative size-12 duration-300",
				currentScrollY > 250 ? "cursor-pointer opacity-100" : "pointer-events-none opacity-0"
			)}
			onClick={scrollToTop}
		>
			<div className="border-secondary animate-gradient absolute inset-1.5 rounded-full border-2" />
			<Image src={avatar} alt="" className="relative size-full" />
		</div>
	);
}

export default Avatar;
