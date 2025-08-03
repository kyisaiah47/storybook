import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toast } from "./Toast";

const meta = {
	title: "Example/Toast",
	component: Toast,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		message: "Your changes have been saved.",
	},
};

export const Dismissible: Story = {
	args: {
		message: "Profile updated successfully.",
		onDismiss: () => alert("Toast dismissed"),
	},
};
