import "./quote.css";

interface QuoteProps {
	quote: string;
	author?: string;
}

export const Quote = ({ quote, author }: QuoteProps) => {
	return (
		<blockquote className="storybook-quote">
			<p className="quote-text">“{quote}”</p>
			{author && <footer className="quote-author">— {author}</footer>}
		</blockquote>
	);
};
