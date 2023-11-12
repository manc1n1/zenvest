import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import { LoginProvider } from './utils/LoginContext';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
	return (
		<>
			<LoginProvider>
				<Nav />
				<main className="min-h-screen pt-24">
					<Outlet />
				</main>
				<Footer />
			</LoginProvider>
		</>
	);
}

export default App;
