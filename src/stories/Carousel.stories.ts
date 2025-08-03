import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Carousel } from "./Carousel";

const meta = {
	title: "Example/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: ["First Slide", "Second Slide", "Third Slide"],
	},
};
