// Slider.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Slider } from "./Slider";

const meta = {
	title: "Example/Slider",
	component: Slider,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Volume",
		min: 0,
		max: 100,
		step: 5,
	},
};
