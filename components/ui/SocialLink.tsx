import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';
import { IconType } from 'react-icons';

interface SocialLinkProps {
	icon: IconType;
	className?: string;
	title: string;
	username?: string;
	url: string;
}

function SocialLink({ icon: Icon, className, title, username, url }: SocialLinkProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-2 p-4 duration-300 hover:bg-white/20 dark:hover:bg-black/10"
		>
			<div
				className={cn(
					'border-edge flex size-10 items-center justify-center rounded-lg border md:size-16 md:rounded-xl'
				)}
			>
				<Icon className="size-6 duration-300 group-hover:scale-125 md:size-8" />
			</div>
			<div className="flex flex-grow flex-col gap-1">
				<span className="font-semibold">{title}</span>
				<span className="font-mono text-xs text-slate-500">{username}</span>
			</div>
			<ArrowUpRightIcon className="size-3 duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 md:size-4" />
		</a>
	);
}

export default SocialLink;
