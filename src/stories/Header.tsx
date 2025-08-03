import { motion } from "framer-motion";
import "./header.css";

export const Header = () => (
	<header>
		<motion.div
			className="storybook-header"
			initial={{ opacity: 0, y: -16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 200, damping: 24 }}
		>
			{/* Brand */}
			<div className="storybook-header__brand">
				<svg
					width="28"
					height="28"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<g
						fill="none"
						fillRule="evenodd"
					>
						<path
							d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
							fill="#FFF"
						/>
						<path
							d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
							fill="#555AB9"
						/>
						<path
							d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
							fill="#91BAF8"
						/>
					</g>
				</svg>
				<h1 className="storybook-header__title">Sonder</h1>
			</div>

			{/* Navigation */}
			<nav className="storybook-header__nav">
				<a href="#">Work</a>
				<a href="#">Services</a>
				<a href="#">About</a>
				<a
					className="active"
					href="#"
				>
					Contact
				</a>
			</nav>
		</motion.div>
	</header>
);
