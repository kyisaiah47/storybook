import { useState } from "react";
import "./slider.css";

interface SliderProps {
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: number;
	label?: string;
	onChange?: (value: number) => void;
}

export const Slider = ({
	min = 0,
	max = 100,
	step = 1,
	defaultValue = 50,
	label,
	onChange,
}: SliderProps) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setValue(newValue);
		onChange?.(newValue);
	};

	return (
		<div className="storybook-slider">
			{label && <label>{label}</label>}
			<div className="slider-wrapper">
				<input
					type="range"
					className="slider-input"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={handleChange}
				/>
				<div className="slider-thumb-value">{value}</div>
			</div>
		</div>
	);
};
