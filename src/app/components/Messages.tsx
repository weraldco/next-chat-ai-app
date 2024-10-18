'use client';
import { type Message as TMessage } from 'ai/react';
import { MessageSquare } from 'lucide-react';
import Message from './Message';
type MessagesProps = {
	messages: TMessage[];
};
const Messages = ({ messages }: MessagesProps) => {
	return (
		<div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
			{messages.length ? (
				messages.map((msg, i) => (
					<Message
						key={i}
						content={msg.content}
						isUserMessage={msg.role === 'user'}
					/>
				))
			) : (
				<div className="flex flex-1 flex-col items-center justify-center gap-2">
					<MessageSquare className="size-8 text-blue-500" />
					<h3 className="font-semibold text-xl text-white">You're all set!</h3>
					<p className="text-zinc-500 text-sm">
						Ask your first question to get started.
					</p>
				</div>
			)}
		</div>
	);
};

export default Messages;
