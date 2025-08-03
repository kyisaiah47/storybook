import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import "./tabs.css";

export interface Tab {
	label: string;
	icon?: LucideIcon;
	content: React.ReactNode;
}

interface TabsProps {
	tabs: Tab[];
	initialIndex?: number;
}

export const Tabs = ({ tabs, initialIndex = 0 }: TabsProps) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex);

	return (
		<div className="storybook-tabs">
			<div className="tab-list">
				{tabs.map((tab, index) => (
					<button
						key={tab.label}
						className={`tab-button ${activeIndex === index ? "active" : ""}`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.icon && (
							<tab.icon
								size={16}
								className="tab-icon"
							/>
						)}
						{tab.label}
						{activeIndex === index && (
							<motion.div
								className="tab-underline"
								layoutId="underline"
								transition={{ type: "spring", stiffness: 300, damping: 25 }}
							/>
						)}
					</button>
				))}
			</div>

			<div className="tab-panel">
				<AnimatePresence mode="wait">
					<motion.div
						key={tabs[activeIndex].label}
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.2 }}
					>
						{tabs[activeIndex].content}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};
