export async function AsyncNotFulfilled() {
	const time = new Date().toLocaleTimeString("en-US", {
		timeZone: "America/New_York",
	});

	await new Promise((resolve) => setTimeout(resolve, 30_000));

	return (
		<div className="bg-zinc-100 border border-zinc-300 transition hover:border-zinc-500 p-6">
			<h2>Dynamic Component</h2>
			<p>Time: {time}</p>
			<p>Random: {(Math.random() * 10).toFixed(1)}</p>
		</div>
	);
}
