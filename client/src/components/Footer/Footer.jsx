import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa6';

export default function Footer() {
	return (
		<footer className="flex items-center justify-center sticky bottom-0 py-3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
			<a href="/charlie404">
				<h1 className="font-bold text-base sm:text-lg text-center">
					Made with ♥
				</h1>
			</a>
		</footer>
	);
}
