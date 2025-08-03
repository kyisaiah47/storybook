import { motion } from "framer-motion";
import "./input.css";

export const Input = () => (
	<motion.input
		type="text"
		className="storybook-input"
		placeholder="Type something..."
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ type: "spring", stiffness: 200, damping: 24 }}
	/>
);
