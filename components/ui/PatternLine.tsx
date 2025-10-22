import { cn } from "@/lib/utils";

interface PatternLineProps {
	className?: string;
	patternClassName?: string;
}

function PatternLine({ className, patternClassName = "pattern-dots" }: PatternLineProps) {
	return (
		<div className={cn("border-edge border-b", className)}>
			<div className={cn("text-edge my-1 h-5", patternClassName)} />
		</div>
	);
}

export default PatternLine;
