'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="error">
			<p>Hoppala, Bir şeyler yanlış gitti!</p>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
}
