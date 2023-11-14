import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="flex items-center justify-center sticky bottom-0 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
			<h1 className="bg-clip-text text-transparent transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold text-base sm:text-lg text-center">
				Made with ♥
			</h1>
		</footer>
	);
}
