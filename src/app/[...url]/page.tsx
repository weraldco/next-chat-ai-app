import { ragChat } from '@/lib/ragChat';
import { redis } from '@/lib/redis';
import React from 'react';
import ChatWrapper from '../components/ChatWrapper';
type PageProps = {
	params: { url: string | string[] | undefined };
};

function reconstructURL({ url }: { url: string[] }) {
	const decodedComponents = url.map((component) =>
		decodeURIComponent(component)
	);
	return decodedComponents.join('/');
}
const Page = async ({ params }: PageProps) => {
	const reconstructedURL = reconstructURL({ url: params.url as string[] });

	const isAlreadyIndexed = await redis.sismember(
		'indexed-urls',
		reconstructedURL
	);
	const sessionId = 'mock-session';
	if (!isAlreadyIndexed) {
		await ragChat.context.add({
			type: 'html',
			source: reconstructedURL,
			config: { chunkOverlap: 50, chunkSize: 200 },
		});

		await redis.sadd('indexed-urls', reconstructedURL);
	}

	return (
		<div>
			<ChatWrapper sessionId={sessionId} />
		</div>
	);
};

export default Page;
