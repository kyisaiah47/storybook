import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "./Toggle";

const meta = {
	title: "Example/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		checked: false,
	},
};
