import { motion } from "framer-motion";
import "./toggle.css";

export const Toggle = () => (
	<motion.input
		type="checkbox"
		className="storybook-toggle"
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ type: "spring", stiffness: 200, damping: 24 }}
	/>
);
