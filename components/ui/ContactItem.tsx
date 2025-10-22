import { LucideIcon } from "lucide-react";

interface ContactItemProps {
	icon: LucideIcon;
	text: React.ReactNode;
}

function ContactItem({ icon: Icon, text }: ContactItemProps) {
	return (
		<div className="group flex items-center gap-2">
			<div className="border-muted-foreground/15 bg-muted/30 dark:ring-border ring-offset-background flex size-6 shrink-0 items-center justify-center rounded-lg border ring-1 ring-gray-300 ring-offset-1 duration-300 group-hover:scale-125">
				<Icon className="text-muted-foreground size-4" />
			</div>
			<div className="[&_a]:decoration-edge font-mono text-sm [&_a]:font-bold [&_a]:hover:underline [&_a]:hover:decoration-dashed [&_a]:hover:underline-offset-4">
				{text}
			</div>
		</div>
	);
}

export default ContactItem;
