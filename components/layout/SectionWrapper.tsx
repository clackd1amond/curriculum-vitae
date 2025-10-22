import PatternLine from "../ui/PatternLine";

interface SectionWrapperProps {
	children: React.ReactNode;
	title?: string;
	id?: string;
}

function SectionWrapper({ children, title, id }: SectionWrapperProps) {
	return (
		<section className="border-edge relative flex items-center justify-center overflow-hidden border-t" id={id}>
			<div className="border-edge relative z-10 mx-auto w-full max-w-3xl border-x">
				{title ? (
					<>
						<PatternLine />
						<h3 className="border-edge border-b px-4 py-1 text-2xl font-bold tracking-tight">{title}</h3>
					</>
				) : null}
				{children}
			</div>
		</section>
	);
}

export default SectionWrapper;
