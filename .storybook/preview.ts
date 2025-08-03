import type { Preview } from "@storybook/nextjs-vite";
import "../src/tailwind.css";

export const globalTypes = {
	theme: {
		name: "Theme",
		description: "Global theme for components",
		defaultValue: "light",
		toolbar: {
			icon: "circlehollow",
			items: ["light", "dark"],
			showName: true,
		},
	},
};

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "light-gray",
			values: [
				{ name: "light-gray", value: "#f4f4f5" },
				{ name: "dark", value: "#121212" },
			],
		},
		a11y: {
			test: "todo",
		},
	},
	decorators: [
		(Story, context) => {
			const isDark = context.globals.theme === "dark";
			document.documentElement.setAttribute(
				"data-theme",
				isDark ? "dark" : "light"
			);
			return Story();
		},
	],
};

export default preview;
