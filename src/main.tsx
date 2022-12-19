import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

import { Provider } from 'react-redux';
import { store } from './app/store';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
