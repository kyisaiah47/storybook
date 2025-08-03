import { motion } from "framer-motion";
import "./progress.css";

interface ProgressBarProps {
	value?: number; // optional — undefined triggers indeterminate
	label?: string;
}

export const ProgressBar = ({ value, label }: ProgressBarProps) => {
	return (
		<div className="storybook-progress-wrapper">
			<div className="storybook-progress-bar">
				{value !== undefined ? (
					<motion.div
						className="storybook-progress-fill"
						initial={{ width: 0 }}
						animate={{ width: `${value}%` }}
						transition={{ duration: 0.3 }}
					/>
				) : (
					<motion.div
						className="progress-indeterminate"
						animate={{ x: ["-100%", "100%"] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
					/>
				)}
			</div>
			{label && <p className="progress-label">{label}</p>}
		</div>
	);
};
