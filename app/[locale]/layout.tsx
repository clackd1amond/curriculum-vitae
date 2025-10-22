import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Fira_Code, IBM_Plex_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
	variable: "--font-ibm-plex-sans",
	subsets: ["latin", "cyrillic"]
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin", "cyrillic"]
});

export async function generateStaticParams() {
	return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations("meta");

	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

	return {
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical: `${baseUrl}${locale === "en" ? "" : `/${locale}`}`,
			languages: {
				en: `${baseUrl}`,
				uk: `${baseUrl}/uk`,
				"x-default": `${baseUrl}`
			}
		},
		openGraph: {
			locale: locale === "en" ? "en_US" : "uk_UA",
			alternateLocale: locale === "en" ? "uk_UA" : "en_US"
		}
	};
}

export default async function RootLayout({
	children,
	params
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale as Locale);

	return (
		<html lang={locale as Locale} suppressHydrationWarning>
			<body className={cn(firaCode.variable, ibmPlexSans.variable, "antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider>{children}</NextIntlClientProvider>
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
