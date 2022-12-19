import { useRouteError } from 'react-router-dom';

export function ErrorPageView(): JSX.Element {
	const error = useRouteError() as { message: string; statusText: string };
	console.error(error);

	return (
		<div>
			<h1>Oops! Something went wrong.</h1>
			<p>Sorry, an unexpected error has occurred</p>

			<p>
				<i>
					{error.statusText.length !== 0
						? error.statusText
						: error.message}
				</i>
			</p>
		</div>
	);
}
