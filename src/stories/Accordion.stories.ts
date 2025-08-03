import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion, AccordionItem } from "./Accordion";

const items: AccordionItem[] = [
	{
		title: "What is Sonder?",
		content:
			"Sonder is a voice-based time capsule app for emotional reflection and growth.",
	},
	{
		title: "How do I record an entry?",
		content:
			"Simply tap the floating microphone button and begin speaking. It's that easy!",
	},
	{
		title: "Can I delete old recordings?",
		content:
			"Yes. You can archive or permanently delete entries from your library.",
	},
];

const meta = {
	title: "Example/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items,
	},
};
