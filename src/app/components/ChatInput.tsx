'use client';
import { Button, Textarea } from '@nextui-org/react';
import { type useChat } from 'ai/react';
import { Send } from 'lucide-react';
import React from 'react';

type HandleInputChange = ReturnType<typeof useChat>['handleInputChange'];
type HandleSubmit = ReturnType<typeof useChat>['handleSubmit'];
type SetInput = ReturnType<typeof useChat>['setInput'];

type ChatInputProps = {
	input: string;
	handleInputChange: HandleInputChange;
	handleSubmit: HandleSubmit;
	setInput: SetInput;
};

const ChatInput = ({
	handleInputChange,
	handleSubmit,
	setInput,
	input,
}: ChatInputProps) => {
	return (
		<div className="z-10 bg-zinc-900 absolute bottom-0 left-0 w-full">
			<div className="mx-2 flex flex-row gap-3 md:mx-4 md:latest:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
				<div className="relative flex h-full flex-1 items-stretch md:flex-col">
					<div className="relative flex flex-col w-full flex-grow p-4">
						<form onSubmit={handleSubmit} className="relative">
							<Textarea
								className="bg-zinc-800 resize-none hover:bg-zinc-900 rounded-xl text-base"
								onChange={handleInputChange}
								value={input}
								onKeyDown={(e) => {
									if (e.key == 'Enter' && !e.shiftKey) {
										e.preventDefault();
										handleSubmit();
										setInput('');
									}
								}}
								minRows={4}
								autoFocus
								placeholder="Enter your question..."
							/>
							<Button
								size="sm"
								type="submit"
								className="absolute z-10 border border-border bg-zinc-900 right-2 bottom-2"
							>
								<Send className="size-4 text-white " />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatInput;
