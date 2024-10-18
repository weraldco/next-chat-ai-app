'use client';
import { type Message as TMessage } from 'ai/react';
import Message from './Message';
type MessagesProps = {
	messages: TMessage[];
};
const Messages = ({ messages }: MessagesProps) => {
	return (
		<div className="">
			{messages ? (
				messages.map((msg, i) => (
					<Message
						key={i}
						content={msg.content}
						isUserMessage={msg.role === 'user'}
					/>
				))
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Messages;
