// Avatar.tsx
import { motion } from "framer-motion";
import "./avatar.css";

interface AvatarProps {
	src?: string;
	alt?: string;
	name?: string;
	size?: number;
	status?: "online" | "offline";
}

export const Avatar = ({
	src,
	alt = "User avatar",
	name = "?",
	size = 48,
	status,
}: AvatarProps) => {
	const fallbackInitial = name?.charAt(0).toUpperCase();

	return (
		<div
			className="storybook-avatar-wrapper"
			style={{ width: size, height: size }}
		>
			{src ? (
				<motion.img
					key={src}
					src={src}
					alt={alt}
					className="avatar-img"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				/>
			) : (
				<div className="avatar-fallback">{fallbackInitial}</div>
			)}
			{status && <span className={`avatar-status ${status}`} />}
		</div>
	);
};
