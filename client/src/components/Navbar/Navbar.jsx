import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav({ links }) {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [pathname]);

	return (
		<nav className="container mx-auto px-6 py-3">
			<div className="sm:flex justify-between items-center ">
				<Link className="text-lg" to="/">
					<h1 className="">
						ZenVest
					</h1>
				</Link>
				<div className="flex justify-end sm:justify-between space-x-5 text-lg sm:mt-0">
					{links.map((link) => link)}
				</div>
			</div>
		</nav>
	);
}
