"use client";

import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./Button";

function ScrollToTop() {
	const [currentScrollY, setCurrentScrollY] = useState(0);
	const { scrollY } = useScroll();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useMotionValueEvent(scrollY, "change", latest => {
		setCurrentScrollY(latest);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	if (!isMounted) {
		return null;
	}

	return (
		<Button
			className={cn(
				"fixed right-4 bottom-4 z-50",
				currentScrollY > 250 ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
			)}
			onClick={scrollToTop}
			size="icon"
			variant="outline"
		>
			<ArrowUpIcon />
		</Button>
	);
}

export default ScrollToTop;
