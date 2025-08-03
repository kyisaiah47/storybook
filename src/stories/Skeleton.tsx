import "./skeleton.css";

interface SkeletonProps {
	width?: string;
	height?: string;
	borderRadius?: string;
}

export const Skeleton = ({
	width = "100%",
	height = "1rem",
	borderRadius = "0.5rem",
}: SkeletonProps) => {
	return (
		<div
			className="storybook-skeleton"
			style={{
				width,
				height,
				borderRadius,
			}}
		/>
	);
};
