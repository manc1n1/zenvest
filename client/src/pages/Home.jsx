import Title from '../components/HomePage/Title';
import Mission from '../components/HomePage/Mission';
import Pillars from '../components/HomePage/Pillars';
import Team from '../components/HomePage/Team';

const Home = () => {
	return (
		<section className="w-full max-w-xl mx-auto text-white text-opacity-60">
			<Title />
			<Mission />
			<Pillars />
			<Team />
		</section>
	);
};

export default Home;
