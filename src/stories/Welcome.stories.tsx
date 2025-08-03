import { Welcome } from "./Welcome";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
	title: "Welcome",
	component: Welcome,
	parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
