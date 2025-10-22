import CertificateItem from "@/components/ui/CertificateItem";
import { getLocale, getTranslations } from "next-intl/server";
import { SiUdemy } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";

async function CertificatesSection() {
	const t = await getTranslations("certificates");
	const locale = await getLocale();

	const certificates = [
		{
			logo: SiUdemy,
			title: t("items.udemy-admin-panel.title"),
			subtitle: t("items.udemy-admin-panel.subtitle"),
			place: t("items.udemy-admin-panel.place"),
			length: t("hours", { hours: 8 }),
			date: "07-06-2021",
			url: "https://www.udemy.com/certificate/UC-ea549314-b73a-4392-ae12-19a34fecf9cd/"
		},
		{
			logo: SiUdemy,
			title: t("items.udemy-react-practical-course.title"),
			subtitle: t("items.udemy-react-practical-course.subtitle"),
			place: t("items.udemy-react-practical-course.place"),
			length: t("hours", { hours: 18.5 }),
			date: "07-01-2021",
			url: "https://www.udemy.com/certificate/UC-3f788cc5-a5a8-414b-9576-abec681bd4e5/"
		},
		{
			logo: SiUdemy,
			title: t("items.udemy-complete-javascript-react.title"),
			subtitle: t("items.udemy-complete-javascript-react.subtitle"),
			place: t("items.udemy-complete-javascript-react.place"),
			length: t("hours", { hours: 61 }),
			date: "06-17-2021",
			url: "https://www.udemy.com/certificate/UC-458801a4-0692-44aa-9f3d-8949dc7692e3/"
		},
		{
			logo: SiUdemy,
			title: t("items.udemy-practical-javascript.title"),
			subtitle: t("items.udemy-practical-javascript.subtitle"),
			place: t("items.udemy-practical-javascript.place"),
			length: t("hours", { hours: 23 }),
			date: "04-13-2021",
			url: "https://www.udemy.com/certificate/UC-0ccc53ba-5000-448e-a096-75b760694fe0/"
		}
	];

	return (
		<SectionWrapper id="certificates" title={t("title")}>
			<div className="divide-edge flex flex-col divide-y">
				{certificates.map((certificate, index) => (
					<CertificateItem key={index} {...certificate} dateLocale={locale === "en" ? "en-US" : "uk-UA"} />
				))}
			</div>
		</SectionWrapper>
	);
}

export default CertificatesSection;
