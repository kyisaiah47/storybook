import "./badge.css";

export interface BadgeProps {
	label: string;
	variant?: "default" | "success" | "warning" | "info" | "subtle";
	showIcon?: boolean;
}

const icons = {
	success: "✅",
	warning: "⚠️",
	info: "ℹ️",
	default: "🔖",
	subtle: "•",
};

export const Badge = ({
	label,
	variant = "default",
	showIcon = true,
}: BadgeProps) => {
	return (
		<span className={`storybook-badge badge--${variant}`}>
			{showIcon && <span className="badge-icon">{icons[variant]} </span>}
			{label}
		</span>
	);
};
