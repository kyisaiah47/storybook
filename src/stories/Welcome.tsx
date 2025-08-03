export const Welcome = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-gradient-to-b from-[#f9f7ff] to-white text-center font-['Plus_Jakarta_Sans'] text-neutral-900">
			<div className="max-w-xl">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Welcome to the Sonder Component Library
				</h1>
				<p className="text-lg text-neutral-700 mb-8">
					Explore the reusable building blocks of the app.
				</p>
				<ul className="space-y-4 text-left text-base text-neutral-800">
					<li className="flex items-start gap-2">
						<span>🧱</span>
						<span>Atomic components</span>
					</li>
					<li className="flex items-start gap-2">
						<span>🌀</span>
						<span>Motion and layout</span>
					</li>
					<li className="flex items-start gap-2">
						<span>🎨</span>
						<span>Styled with Tailwind and design tokens</span>
					</li>
				</ul>
				<p className="mt-10 text-sm text-neutral-500">
					This is a mock Storybook project built to practice component-driven
					development.
				</p>
			</div>
		</div>
	);
};
