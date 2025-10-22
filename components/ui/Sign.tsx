"use client";

import { useTranslations } from "next-intl";

function Sign() {
	const t = useTranslations("footer");

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<span>
			{t.rich("built-by", {
				scroll: chunks => (
					<span className="hover:text-foreground cursor-pointer font-bold duration-300" onClick={scrollToTop}>
						{chunks}
					</span>
				)
			})}
		</span>
	);
}

export default Sign;
