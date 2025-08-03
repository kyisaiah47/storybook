import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgressBar } from "./Progress";

const meta = {
	title: "Example/ProgressBar",
	component: ProgressBar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 65,
		label: "Uploading... 65%",
	},
};

export const Indeterminate: Story = {
	args: {
		value: undefined,
		label: "Loading...",
	},
};
