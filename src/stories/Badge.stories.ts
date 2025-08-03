import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
	title: "Example/Badge",
	component: Badge,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		label: "Default",
		variant: "default",
	},
};

export const Success: Story = {
	args: {
		label: "Success",
		variant: "success",
	},
};

export const Warning: Story = {
	args: {
		label: "Warning",
		variant: "warning",
	},
};

export const Info: Story = {
	args: {
		label: "Info",
		variant: "info",
	},
};

export const Subtle: Story = {
	args: {
		label: "Subtle",
		variant: "subtle",
	},
};
