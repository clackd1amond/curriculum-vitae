"use client";

import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
	const [isMounted, setIsMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	const changeTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<Button variant="outline" size="icon" className="bg-muted rounded-xl" onClick={changeTheme}>
			{resolvedTheme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</Button>
	);
}

export default ThemeSwitcher;
