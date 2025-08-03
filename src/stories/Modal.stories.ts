import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal } from "./Modal";

const meta = {
	title: "Example/Modal",
	component: Modal,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Delete entry?",
		description: "This action cannot be undone.",
		isOpen: true,
		onClose: () => alert("Modal closed"),
		children: "Are you sure you want to permanently delete this entry?",
	},
};
