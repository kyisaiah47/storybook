import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input"; // make sure this path points to your input component

const meta = {
	title: "Example/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Enter something...",
	},
};
