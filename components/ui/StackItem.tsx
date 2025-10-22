import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

interface StackItemProps {
	image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	name: string;
}

function StackItem({ image: Image, name }: StackItemProps) {
	return (
		<Tooltip>
			<TooltipTrigger>
				<div className="text-foreground flex items-center gap-2">
					<Image className="aspect-square w-full" />
				</div>
			</TooltipTrigger>
			<TooltipContent className="font-mono">{name}</TooltipContent>
		</Tooltip>
	);
}

export default StackItem;
