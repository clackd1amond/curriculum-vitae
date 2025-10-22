import {
	Timeline,
	TimelineContent,
	TimelineDate,
	TimelineHeader,
	TimelineIndicator,
	TimelineItem,
	TimelineSeparator,
	TimelineTitle
} from "@/components/ui/Timeline";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ExperienceItemProps {
	sectionTitle: string;
	isActive: boolean;
	items: { title: string; description: string; date: string; icon: LucideIcon }[];
}

function ExperienceItem({ sectionTitle, isActive, items }: ExperienceItemProps) {
	return (
		<div className="space-y-2 p-4">
			<h3 className="flex items-center gap-2 text-2xl font-semibold">
				<div className={cn("flex size-2 rounded-full", isActive ? "bg-green-500" : "bg-primary/10")} />
				{sectionTitle}
			</h3>
			<Timeline defaultValue={0}>
				{items.map((item, index) => (
					<TimelineItem
						key={index}
						step={items.length - index}
						className="group-data-[orientation=vertical]/timeline:ms-10"
					>
						<TimelineHeader>
							<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
							<TimelineTitle className="mt-0.5">{item.title}</TimelineTitle>
							<TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
								<item.icon size={14} />
							</TimelineIndicator>
						</TimelineHeader>
						<TimelineContent>
							{item.description}
							<TimelineDate className="mt-2 mb-0">{item.date}</TimelineDate>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</div>
	);
}

export default ExperienceItem;
