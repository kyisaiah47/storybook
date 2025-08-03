import React from "react";
import { motion } from "framer-motion";
import "./welcome.css";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
	}),
};

export const Welcome = () => {
	const cards = [
		{
			icon: "📦",
			title: "Components",
			text: "Reusable buttons, cards, modals, and more—organized by design system best practices.",
		},
		{
			icon: "🎞️",
			title: "Motion",
			text: "Subtle animations powered by Framer Motion to bring interactions to life.",
		},
		{
			icon: "🖌️",
			title: "Theming",
			text: "Consistent colors, spacing, and typography defined via design tokens.",
		},
	];

	return (
		<div className="welcome-container">
			<motion.div
				className="welcome-shell"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="welcome-card">
					<h1 className="welcome-title">Component Library</h1>
					<p className="welcome-subtitle">
						Explore the reusable building blocks of the app.
					</p>
					<ul className="welcome-list">
						<li>
							<span className="emoji">🧱</span>
							<span>Atomic components</span>
						</li>
						<li>
							<span className="emoji">🌀</span>
							<span>Motion and layout</span>
						</li>
						<li>
							<span className="emoji">🎨</span>
							<span>Styled with Tailwind and design tokens</span>
						</li>
					</ul>
					<p className="welcome-note">
						This is a mock Storybook project built to practice component-driven
						development.
					</p>
				</div>

				<div className="welcome-details">
					<h2>What&apos;s inside?</h2>
					<div className="details-grid">
						{cards.map((card, i) => (
							<motion.div
								key={i}
								className="detail-card"
								custom={i}
								initial="initial"
								animate="animate"
							>
								<h3>
									{card.icon} {card.title}
								</h3>
								<p>{card.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</div>
	);
};
