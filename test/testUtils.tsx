import { CssBaseline, ThemeProvider } from '@mui/material';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { FunctionComponent, ReactElement } from 'react';
import theme from '../src/config/theme';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: FunctionComponent = ({ children }) => (
	<ThemeProvider theme={theme}>
		<CssBaseline /> {children}
	</ThemeProvider>
);

const customRender = (
	ui: ReactElement,
	options: RenderOptions = {}
): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
