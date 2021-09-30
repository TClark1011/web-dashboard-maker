import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../config/theme';
import createEmotionCache from '../utils/createEmotionCache';
import CustomAppProps from '../type/CustomAppProps';

const MyApp = ({
	Component,
	emotionCache = createEmotionCache(),
	pageProps,
}: CustomAppProps) => (
	<CacheProvider value={emotionCache}>
		<Head>
			<title>My page</title>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
		</Head>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	</CacheProvider>
);

export default MyApp;
