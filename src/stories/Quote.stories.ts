import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Quote } from "./Quote";

const meta = {
	title: "Example/Quote",
	component: Quote,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
	args: {
		quote: "The quieter you become, the more you are able to hear.",
		author: "Rumi",
	},
};

export const Minimal: Story = {
	args: {
		quote: "Stillness is where creativity and solutions are found.",
	},
};
