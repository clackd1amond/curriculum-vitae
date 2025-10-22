"use server";

import { routing } from "@/i18n/routing";
import { Locale } from "next-intl";
import { cookies } from "next/headers";

export async function changeLocale(locale: Locale) {
	if (!routing.locales.includes(locale)) return;

	const cookieStore = await cookies();
	cookieStore.set("NEXT_LOCALE", locale);
}
