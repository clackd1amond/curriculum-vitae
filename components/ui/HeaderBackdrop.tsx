"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

function HeaderBackdrop() {
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", latest => {
		setCurrentScrollY(latest);
	});

	return (
		<div
			className={cn(
				"bg-secondary/35 absolute inset-0 backdrop-blur-md duration-200",
				currentScrollY > 100 ? "opacity-100" : "opacity-0"
			)}
		/>
	);
}

export default HeaderBackdrop;
