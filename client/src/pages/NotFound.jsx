import { useLocation } from 'react-router-dom';
import { LoginProvider } from '../utils/LoginContext';
import Nav from '../components/Navbar/Nav';
import charlie404 from '../assets/images/charlie.png';

function NotFound() {
	let location = useLocation();
	return (
		<section className="min-h-screen">
			<LoginProvider>
				<Nav />
				<div className="flex items-center justify-center flex-col">
					<div className="justify-center text-xl sm:text-2xl">
						<div className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-blue-300 via-pink-500 from-violet-300 bg-size-200 hover:bg-right font-bold text-center">
							<h1 className="mt-4 mb-4">
								No match for <code>{location.pathname}</code>
							</h1>
						</div>
						<img
							className="mx-auto rounded-3xl mb-4 shadow-2xl w-72 sm:w-96"
							src={charlie404}
							alt="404"
						/>
					</div>
				</div>
			</LoginProvider>
		</section>
	);
}

export default NotFound;
