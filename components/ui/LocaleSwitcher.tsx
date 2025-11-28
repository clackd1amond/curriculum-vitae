"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Button } from "./Button";
import { Spinner } from "./Spinner";

function LocaleSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();

	const newLocale = locale === "en" ? "uk" : "en";

	const handleLocaleChange = () => {
		startTransition(async () => {
			router.replace(pathname, { locale: newLocale });
		});
	};

	return (
		<Button
			size="icon"
			variant="outline"
			className="rounded-xl font-mono"
			onClick={handleLocaleChange}
			disabled={isPending}
		>
			{isPending ? <Spinner /> : newLocale.toLowerCase()}
		</Button>
	);
}

export default LocaleSwitcher;
