import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./modal.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	description?: string;
	children?: React.ReactNode;
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	description,
	children,
}: ModalProps) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="storybook-modal-overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<motion.div
						className="storybook-modal"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ type: "spring", stiffness: 240, damping: 20 }}
					>
						<button
							className="modal-close"
							onClick={onClose}
						>
							<X size={20} />
						</button>
						<h3 className="modal-title">{title}</h3>
						{description && <p className="modal-description">{description}</p>}
						<div className="modal-content">{children}</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
