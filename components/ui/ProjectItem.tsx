import { ArrowUpRightIcon, LinkIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./Badge";

interface ProjectItemProps {
	image: StaticImageData;
	title: string;
	description: string;
	url: string;
	linkLabel?: string;
	tags: string[];
}

function ProjectItem({ image, title, description, url, linkLabel, tags }: ProjectItemProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group/project relative flex max-md:flex-col-reverse"
		>
			<div className="border-edge text-edge pattern-dots-md relative flex w-full flex-col items-center gap-1 overflow-hidden border-dashed pb-1.5 max-md:border-b md:flex-2 md:border-r">
				<Image src={image} alt={title} className="h-auto w-full" />
				<div className="border-muted-foreground/15 bg-muted/30 dark:ring-border ring-offset-background text-muted-foreground group-hover/project:text-foreground flex shrink-0 items-center justify-center gap-1 rounded-md border px-2 font-mono text-xs ring-1 ring-gray-300 ring-offset-1 backdrop-blur-md duration-300">
					<LinkIcon className="size-3" />
					{url}
				</div>
			</div>
			<div className="flex flex-col gap-3 p-4 md:flex-3">
				<h3 className="text-xl font-bold text-balance">{title}</h3>
				<p className="text-muted-foreground text-sm">{description}</p>
				<div className="flex flex-wrap items-center gap-2">
					{tags.map((tag, index) => (
						<Badge variant="outline" key={index} className="border-edge">
							{tag}
						</Badge>
					))}
				</div>
				<div className="mt-auto flex items-center gap-2 self-end">
					<span className="relative z-10">
						{linkLabel || "Visit website"}
						<div className="bg-foreground absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 duration-300 group-hover/project:scale-x-100" />
					</span>
					<ArrowUpRightIcon className="size-3 duration-300 group-hover/project:translate-x-1 group-hover/project:-translate-y-1 md:size-4" />
				</div>
			</div>
		</a>
	);
}

export default ProjectItem;
