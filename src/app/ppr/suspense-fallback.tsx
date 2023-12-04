export function SuspenseFallback() {
	const time = new Date().toLocaleTimeString("en-US", {
		timeZone: "America/New_York",
	});

	return (
		<div className="bg-zinc-100 border border-zinc-300 transition hover:border-zinc-500 p-6">
			<h2>Suspense Fallback: (should be static)</h2>
			<p>Time: {time}</p>
			<p>Random: {(Math.random() * 10).toFixed(1)}</p>
		</div>
	);
}
