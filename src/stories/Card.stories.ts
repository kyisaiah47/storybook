import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta = {
	title: "Example/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		layout: "centered", // or 'fullscreen' if you want edge-to-edge
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
