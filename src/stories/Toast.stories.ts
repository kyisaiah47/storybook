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
		type: "info",
		title: "Changes saved",
		description: "Your changes have been saved successfully.",
	},
};

export const Success: Story = {
	args: {
		type: "success",
		title: "Profile updated",
		description: "Your profile was updated and synced.",
	},
};

export const Error: Story = {
	args: {
		type: "error",
		title: "Error saving",
		description: "Something went wrong. Please try again.",
	},
};

export const Warning: Story = {
	args: {
		type: "warning",
		title: "Unsaved changes",
		description: "You have unsaved edits that will be lost.",
	},
};
