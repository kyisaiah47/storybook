import { Button } from "./Button";
import "./header.css";
import { motion } from "framer-motion";

type User = {
	name: string;
};

export interface HeaderProps {
	user?: User;
	onLogin?: () => void;
	onLogout?: () => void;
	onCreateAccount?: () => void;
}

export const Header = ({
	user,
	onLogin,
	onLogout,
	onCreateAccount,
}: HeaderProps) => (
	<header>
		<motion.div
			className="storybook-header"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 260, damping: 20 }}
		>
			{/* Brand */}
			<div className="storybook-header__brand">
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
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
				<h1 className="storybook-header__title">Acme</h1>
			</div>

			{/* Navigation with dropdowns */}
			<nav className="storybook-header__nav">
				<div className="dropdown">
					<span>Home</span>
					<div className="dropdown-menu">
						<a href="#">Overview</a>
						<a href="#">Updates</a>
					</div>
				</div>
				<div className="dropdown">
					<span>Features</span>
					<div className="dropdown-menu">
						<a href="#">AI Tools</a>
						<a href="#">Automation</a>
						<a href="#">Integrations</a>
					</div>
				</div>
				<div className="dropdown">
					<span>Pricing</span>
					<div className="dropdown-menu">
						<a href="#">Free</a>
						<a href="#">Pro</a>
						<a href="#">Enterprise</a>
					</div>
				</div>
				<div className="dropdown">
					<span>About</span>
					<div className="dropdown-menu">
						<a href="#">Our Story</a>
						<a href="#">Careers</a>
						<a href="#">Contact</a>
					</div>
				</div>
			</nav>

			{/* Search */}
			<div className="storybook-header__search">
				<input
					type="text"
					placeholder="Search..."
				/>
			</div>

			{/* Auth */}
			<div className="storybook-header__actions">
				{user ? (
					<Button
						size="small"
						onClick={onLogout}
						label="Log out"
					/>
				) : (
					<>
						<Button
							size="small"
							onClick={onLogin}
							label="Log in"
						/>
						<Button
							primary
							size="small"
							onClick={onCreateAccount}
							label="Sign up"
						/>
					</>
				)}
			</div>
		</motion.div>
	</header>
);
