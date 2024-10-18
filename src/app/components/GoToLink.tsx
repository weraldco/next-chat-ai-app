'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const GoToLink = () => {
	const [link, setLink] = useState<string>('');
	const router = useRouter();
	function handleSubmit() {
		// console.log(`localhost:3000/${link}`);
		router.push(`http://localhost:3000/${link}`);
	}
	return (
		<div>
			<input
				type="text"
				className="py-2 px-2 rounded-full w-[300px]"
				placeholder="Put a website you want to talk to.."
				onChange={(e) => setLink(e.target.value)}
				value={link}
			/>
			<button
				onClick={handleSubmit}
				className="bg-blue-500 py-2 px-4 rounded-full hover:scale-105 hover:opacity-80 duration-200 text-white font-bold"
			>
				Go..
			</button>
		</div>
	);
};

export default GoToLink;
