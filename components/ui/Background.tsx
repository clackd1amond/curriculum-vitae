"use client";

import { useTheme } from "next-themes";
import ColorBends from "./ColorBends";

function Background() {
	const { resolvedTheme } = useTheme();
	const colors = resolvedTheme === "dark" ? ["#000046", "#1CB5E0"] : ["#D2B6AD", "#7886C5"];
	return (
		<div className="fixed inset-0 z-0">
			<div className="light-bg dark:dark-bg absolute inset-0 z-0" />
			<ColorBends
				colors={colors}
				rotation={36}
				autoRotate={1}
				speed={0.1}
				scale={2}
				frequency={1.6}
				warpStrength={0.95}
				mouseInfluence={1}
				parallax={0.5}
				noise={0.1}
				transparent
			/>
		</div>
	);
}

export default Background;
