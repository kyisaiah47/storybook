import { motion } from "framer-motion";
import "./spinner.css";

export const Spinner = () => {
	return (
		<motion.div
			className="storybook-spinner"
			animate={{ rotate: 360 }}
			transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
		/>
	);
};
