import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { StrictMode } from 'react';


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />,
	</StrictMode>
);
