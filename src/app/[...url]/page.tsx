import { ragChat } from '@/lib/ragChat';
import React from 'react';
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
	console.log(params);
	const reconstructedURL = reconstructURL({ url: params.url as string[] });
	console.log(reconstructedURL);
	await ragChat.context.add({
		type: 'html',
		source: reconstructedURL,
		config: { chunkOverlap: 50, chunkSize: 200 },
	});

	return <p>Hello</p>;
};

export default Page;
