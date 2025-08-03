import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta = {
	title: "Example/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
	args: {
		src: "https://i.pravatar.cc/100?img=2",
		name: "Luna",
		status: "online",
		size: 64,
	},
};

export const FallbackInitial: Story = {
	args: {
		name: "Isaiah",
		status: "offline",
		size: 64,
	},
};

export const Small: Story = {
	args: {
		name: "A",
		size: 32,
	},
};
