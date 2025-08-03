import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "./Radio";

const meta = {
	title: "Example/Radio",
	component: Radio,
	parameters: { layout: "centered" },
	tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {
		name: "plan",
		defaultValue: "monthly",
		options: [
			{ label: "Monthly Plan", value: "monthly" },
			{ label: "Yearly Plan", value: "yearly" },
			{ label: "Lifetime Plan", value: "lifetime" },
		],
	},
};
