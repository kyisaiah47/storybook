import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./accordion.css";

export interface AccordionItem {
	title: string;
	content: string;
}

interface AccordionProps {
	items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleIndex = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="storybook-accordion">
			{items.map((item, index) => (
				<div
					key={index}
					className="accordion-item"
				>
					<button
						className="accordion-header"
						onClick={() => toggleIndex(index)}
					>
						<span>{item.title}</span>
						<ChevronDown
							size={16}
							className={`accordion-icon ${
								openIndex === index ? "rotate" : ""
							}`}
						/>
					</button>
					<AnimatePresence initial={false}>
						{openIndex === index && (
							<motion.div
								className="accordion-content"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								<p>{item.content}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};
