'use client';
import { Message, useChat } from 'ai/react';
import React from 'react';
import ChatInput from './ChatInput';
import Messages from './Messages';

const ChatWrapper = ({
	sessionId,
	initialMessages,
}: {
	sessionId: string;
	initialMessages: Message[];
}) => {
	const { messages, handleInputChange, input, handleSubmit, setInput } =
		useChat({
			api: '/api/chat-stream',
			body: { sessionId },
			initialMessages,
		});
	return (
		<div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
			<div className="flex-1 flex text-black bg-zinc-800 justify-between flex-col dark">
				<Messages messages={messages} />
			</div>
			<ChatInput
				handleInputChange={handleInputChange}
				input={input}
				handleSubmit={handleSubmit}
				setInput={setInput}
			/>
		</div>
	);
};

export default ChatWrapper;
