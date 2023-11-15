import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginProvider } from './utils/LoginContext';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
	return (
		<>
			<LoginProvider>
				<Nav />
				<main className="min-h-screen p-5 sm:p-10">
					<Outlet />
				</main>
				<Footer />
			</LoginProvider>
		</>
	);
}

export default App;
