import { motion } from "framer-motion";
import "./card.css";

export const Card = () => (
	<motion.div
		className="storybook-card"
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ type: "spring", stiffness: 200, damping: 24 }}
	>
		<h3>Sonder AI</h3>
		<p>
			Explore intuitive, calming UIs powered by AI and glassmorphism. Built for
			emotional resonance and modern tools.
		</p>
	</motion.div>
);
