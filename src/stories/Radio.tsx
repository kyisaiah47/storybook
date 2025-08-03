import { useState } from "react";
import "./radio.css";

interface RadioProps {
	name: string;
	options: { label: string; value: string }[];
	defaultValue?: string;
	onChange?: (value: string) => void;
}

export const Radio = ({
	name,
	options,
	defaultValue,
	onChange,
}: RadioProps) => {
	const [selected, setSelected] = useState(defaultValue || options[0]?.value);

	const handleChange = (value: string) => {
		setSelected(value);
		onChange?.(value);
	};

	return (
		<div className="storybook-radio-group">
			{options.map(({ label, value }) => (
				<label
					key={value}
					className="storybook-radio"
				>
					<input
						type="radio"
						name={name}
						value={value}
						checked={selected === value}
						onChange={() => handleChange(value)}
					/>
					<span className="radio-custom" />
					{label}
				</label>
			))}
		</div>
	);
};
