import Sign from "@/components/ui/Sign";
import PatternLine from "../../ui/PatternLine";
import SectionWrapper from "../SectionWrapper";

function PrefooterSection() {
	return (
		<SectionWrapper>
			<PatternLine />
			<div className="text-muted-foreground flex items-center justify-center gap-2 px-4 py-2 text-center font-mono text-sm">
				<span>© {new Date().getFullYear()}</span>
				<Sign />
			</div>
		</SectionWrapper>
	);
}

export default PrefooterSection;
