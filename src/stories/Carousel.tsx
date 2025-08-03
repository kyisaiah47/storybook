// Carousel.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

interface CarouselProps {
	items: string[];
}

export const Carousel = ({ items }: CarouselProps) => {
	const [index, setIndex] = useState(0);

	const prev = () => setIndex((index - 1 + items.length) % items.length);
	const next = () => setIndex((index + 1) % items.length);

	return (
		<div className="storybook-carousel">
			<button
				className="carousel-arrow"
				onClick={prev}
			>
				<ChevronLeft size={20} />
			</button>

			<div className="carousel-window">
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						className="carousel-item"
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.3 }}
					>
						{items[index]}
					</motion.div>
				</AnimatePresence>
			</div>

			<button
				className="carousel-arrow"
				onClick={next}
			>
				<ChevronRight size={20} />
			</button>
		</div>
	);
};
