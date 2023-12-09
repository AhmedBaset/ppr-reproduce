import { Suspense } from "react";
import { AsyncComponent } from "./async-comp";
import { SuspenseFallback } from "./suspense-fallback";
import { AsyncNotFulfilled } from "./async-not-fulfilled";

export default function Page() {
	const time = new Date().toLocaleTimeString("en-US", {
		timeZone: "America/New_York",
	});

	return (
		<div className="space-y-8 p-4 bg-white border-zinc-50">
			<div>
				<h1>Page.tsx (should be static)</h1>
				<p>Time: {time}</p>
				<p>Random: {(Math.random() * 10).toFixed(1)}</p>
			</div>

			<Suspense>
				<AsyncComponent />
			</Suspense>

			<Suspense fallback={<SuspenseFallback />}>
				<AsyncNotFulfilled />
			</Suspense>
		</div>
	);
}
