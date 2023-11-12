import { Link } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

function Pillars() {
	return (
		<section className="flex justify-center">
			<ul className="flex space-x-10">
				<h3>INVEST</h3>
				<h3>LEARN</h3>
				<h3>ORGANIZE</h3>
			</ul>
		</section>
	);
}

export default Pillars;
