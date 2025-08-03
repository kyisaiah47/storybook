import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./tooltip.css";

interface TooltipProps {
	label: string;
	children: React.ReactNode;
	placement?: "top" | "bottom";
}

export const Tooltip = ({
	label,
	children,
	placement = "top",
}: TooltipProps) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="storybook-tooltip-wrapper">
			<span
				className="tooltip-anchor"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{children}
				<AnimatePresence>
					{hovered && (
						<motion.div
							className={`tooltip-bubble ${placement}`}
							initial={{ opacity: 0, y: placement === "top" ? 4 : -4 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: placement === "top" ? 4 : -4 }}
							transition={{ duration: 0.2 }}
						>
							{label}
						</motion.div>
					)}
				</AnimatePresence>
			</span>
		</div>
	);
};
