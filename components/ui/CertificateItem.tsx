import { ArrowUpRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { IconType } from "react-icons";

interface CertificateItemProps {
	logo: IconType;
	title: string;
	subtitle: string;
	url: string;
	date: string;
	length: string;
	place: string;
	dateLocale: string;
}

function CertificateItem({ logo: Logo, title, subtitle, url, date, length, place, dateLocale }: CertificateItemProps) {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer" className="group/certificate flex">
			<div className="border-edge flex items-center justify-center border-dashed p-4 max-md:hidden md:border-r">
				<Logo className="size-8" />
			</div>
			<div className="flex flex-grow flex-col p-4">
				<h3 className="decoration-foreground/0 group-hover/certificate:decoration-foreground/50 text-lg font-bold text-balance decoration-dashed decoration-2 underline-offset-4 duration-300 group-hover/certificate:underline">
					{title}
				</h3>
				<p className="text-muted-foreground text-sm">{subtitle}</p>
				<div className="text-muted-foreground flex items-center gap-2 text-sm">
					<div className="flex items-center gap-1">
						<CalendarIcon className="size-3" />
						<span>
							{new Date(date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
						</span>
					</div>
					<div className="flex items-center gap-1">
						<ClockIcon className="size-3" />
						<span>{length}</span>
					</div>
					<span>@ {place}</span>
				</div>
			</div>
			<div className="border-edge flex items-center justify-center border-l border-dashed p-4">
				<ArrowUpRightIcon className="size-3 duration-300 group-hover/certificate:translate-x-1 group-hover/certificate:-translate-y-1 md:size-4" />
			</div>
		</a>
	);
}

export default CertificateItem;
