import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface ToolItemProps {
	icons: { image: string; fallback: string }[];
	title: string;
	desc: string;
}

function ToolItem({ icons, title, desc }: ToolItemProps) {
	return (
		<div className="group p-4 duration-300 hover:bg-white/20 dark:hover:bg-black/10">
			<div className="*:data-[slot=avatar]:ring-edge mb-3 flex -space-x-4 duration-300 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:saturate-50 group-hover:*:data-[slot=avatar]:saturate-100">
				{icons.map((icon, i) => (
					<Avatar key={i} className="size-12 transition-all duration-300">
						<AvatarImage src={icon.image} alt={icon.fallback} className="bg-background p-2 dark:bg-gray-800" />
						<AvatarFallback>{icon.fallback}</AvatarFallback>
					</Avatar>
				))}
			</div>

			<h3 className="font-medium">{title}</h3>
			<p className="text-muted-foreground text-sm">{desc}</p>
		</div>
	);
}

export default ToolItem;
