import { useState } from "react";
import "./checkbox.css";

interface CheckboxProps {
	label: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
	label,
	checked = false,
	onChange,
}: CheckboxProps) => {
	const [isChecked, setChecked] = useState(checked);

	const handleToggle = () => {
		setChecked(!isChecked);
		onChange?.(!isChecked);
	};

	return (
		<label className="storybook-checkbox">
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
			/>
			<span className="checkbox-custom" />
			{label}
		</label>
	);
};
