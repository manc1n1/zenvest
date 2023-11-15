import { useLocation } from 'react-router-dom';
import charlie404 from '../assets/images/charlie.png';

function NotFound() {
	let location = useLocation();
	return (
		<section className="w-full">
			<div className="flex justify-center">
				<div className="card-header bg-dark text-center">
					<h1>
						No match for <code>{location.pathname}</code>
					</h1>
					<img src={charlie404} alt="404" />
				</div>
			</div>
		</section>
	);
}

export default NotFound;
