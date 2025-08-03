import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./Divider";

const meta = {
	title: "Example/Divider",
	component: Divider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Default Divider",
};
