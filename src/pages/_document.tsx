import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';
import { Children } from 'react';
import { AppType } from 'next/dist/shared/lib/utils';
import CustomAppProps from '../type/CustomAppProps';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		const originalRenderPage = ctx.renderPage;

		const cache = createEmotionCache();
		const { extractCriticalToChunks } = createEmotionServer(cache);

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: AppType) => (props: CustomAppProps) =>
					<App emotionCache={cache} {...props} />,
			});

		const emotionStyles = extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		));

		return {
			...initialProps,
			styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
		};
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
