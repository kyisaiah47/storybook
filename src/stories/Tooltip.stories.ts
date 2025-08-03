import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "./Tooltip";
import { Info } from "lucide-react";

const meta = {
	title: "Example/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "This is a tooltip",
		children: "Hover me",
	},
};

export const Bottom: Story = {
	args: {
		label: "Tooltip below",
		placement: "bottom",
		children: "Hover me",
	},
};
