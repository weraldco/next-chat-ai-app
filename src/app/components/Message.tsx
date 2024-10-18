import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

type MessageProps = {
	content: string;
	isUserMessage: boolean;
};

const Message = ({ content, isUserMessage }: MessageProps) => {
	return (
		<div
			className={cn({
				'bg-zinc-800': isUserMessage,
				'bg-zinv-900/25': !isUserMessage,
			})}
		>
			<div className="p-6">
				<div className="max-w-3xl mx-auto flex items-start gap-2.5">
					<div
						className={cn(
							'size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center',
							{
								'bg-blue-900 border-blue-700 text-zinc-200': isUserMessage,
							}
						)}
					>
						{isUserMessage ? (
							<User className="size-5" />
						) : (
							<Bot className="size-5 text-white" />
						)}
					</div>
					<div className="flex  ml-6 w-full">
						<div className="flex flex-1 flex-col items-left space-x-2">
							<span className="text-sm font-bold text-gray-900 dark:text-white">
								{isUserMessage ? 'You' : 'Website'}
							</span>
							<p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
								{content}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
