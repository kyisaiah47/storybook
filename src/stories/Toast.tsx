import { motion } from "framer-motion";
import { X } from "lucide-react";
import "./toast.css";

interface ToastProps {
	message: string;
	onDismiss?: () => void;
}

export const Toast = ({ message, onDismiss }: ToastProps) => {
	return (
		<motion.div
			className="storybook-toast"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 16 }}
			transition={{ type: "spring", stiffness: 220, damping: 24 }}
		>
			<span>{message}</span>
			{onDismiss && (
				<button
					onClick={onDismiss}
					aria-label="Dismiss toast"
				>
					<X size={16} />
				</button>
			)}
		</motion.div>
	);
};
