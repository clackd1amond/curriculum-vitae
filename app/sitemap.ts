import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

	return routing.locales.map(locale => ({
		url: `${baseUrl}${locale === routing.defaultLocale ? "" : `/${locale}`}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 1,
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map(loc => [loc, `${baseUrl}${loc === routing.defaultLocale ? "" : `/${loc}`}`])
			)
		}
	}));
}
