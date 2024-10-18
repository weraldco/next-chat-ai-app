'use client';
import { useChat } from 'ai/react';
import React from 'react';
import Messages from './Messages';

const ChatWrapper = ({ sessionId }: { sessionId: string }) => {
	const { messages, handleInputChange, input, handleSubmit } = useChat({
		api: '/api/chat-stream',
		body: { sessionId },
	});
	return (
		<div>
			<div>
				<Messages messages={messages} />
			</div>
			<form className="flex flex-1 flex-row gap-4" onSubmit={handleSubmit}>
				<input
					className="bg-slate-100 border border-slate-500 py-4 px-6 rounded-lg"
					value={input}
					type="text"
					onChange={handleInputChange}
				/>
				<button className="text-white font-bold bg-blue-500 py-4 px-6 rounded-lg hover:opacity-85 hover:scale-105 duration-200">
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatWrapper;
