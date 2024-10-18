import GoToLink from './components/GoToLink';

export default function Home() {
	return (
		<div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
			<div className="flex h-screen justify-center items-center gap-2 text-sm">
				<GoToLink />
			</div>
		</div>
	);
}
