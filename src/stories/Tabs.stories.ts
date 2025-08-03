import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs, Tab } from "./Tabs";
import { BookOpen, Bot, Brush } from "lucide-react";

const tabs: Tab[] = [
	{
		label: "Overview",
		icon: BookOpen,
		content: "This is the overview tab.",
	},
	{
		label: "AI",
		icon: Bot,
		content: "Explore AI tools and integrations.",
	},
	{
		label: "Design",
		icon: Brush,
		content: "Design settings and preferences.",
	},
];

const meta = {
	title: "Example/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tabs,
	},
};
