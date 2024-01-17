import Title from '../components/HomePage/Title';
import Mission from '../components/HomePage/Mission';
import Pillars from '../components/HomePage/Pillars';
import Team from '../components/HomePage/Team';

const Home = () => {	
	return (
		<section className="text-black text-opacity-80">
			<section className='grid grid-cols-3 p-10 py-20'>
				<div className='col-span-2'>
					<Title />
				</div>
				<div>
					<Mission />
				</div>
			</section>
			<Pillars />
			<Team />
		</section>
	);
};

export default Home;
