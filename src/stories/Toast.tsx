import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import "./toast.css";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastProps {
	type?: ToastType;
	title: string;
	description?: string;
}

const icons = {
	success: CheckCircle,
	error: AlertCircle,
	info: Info,
	warning: AlertTriangle,
};

export const Toast = ({ type = "info", title, description }: ToastProps) => {
	const Icon = icons[type];

	return (
		<motion.div
			className={`storybook-toast toast-${type}`}
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 12 }}
			transition={{ type: "spring", stiffness: 240, damping: 20 }}
		>
			<Icon
				className="toast-icon"
				size={20}
			/>
			<div className="toast-text">
				<strong>{title}</strong>
				{description && <p>{description}</p>}
			</div>
		</motion.div>
	);
};
