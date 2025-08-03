import { useState } from "react";
import "./stepper.css";

interface StepperProps {
	steps: string[];
	initialStep?: number;
	onStepChange?: (step: number) => void;
}

export const Stepper = ({
	steps,
	initialStep = 0,
	onStepChange,
}: StepperProps) => {
	const [current, setCurrent] = useState(initialStep);

	const handleClick = (index: number) => {
		setCurrent(index);
		onStepChange?.(index);
	};

	return (
		<div className="storybook-stepper">
			{steps.map((step, i) => (
				<div
					key={i}
					className="step-wrapper"
					onClick={() => handleClick(i)}
				>
					<div className={`step-circle ${i === current ? "active" : ""}`}>
						{i + 1}
					</div>
					<span className={`step-label ${i === current ? "active" : ""}`}>
						{step}
					</span>
					{i < steps.length - 1 && (
						<div className={`step-line ${i < current ? "filled" : ""}`} />
					)}
				</div>
			))}
		</div>
	);
};
