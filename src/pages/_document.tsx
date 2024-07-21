import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
