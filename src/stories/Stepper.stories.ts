import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stepper } from "./Stepper";

const meta = {
	title: "Example/Stepper",
	component: Stepper,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		steps: ["Start", "Details", "Review", "Complete"],
		initialStep: 1,
	},
};
