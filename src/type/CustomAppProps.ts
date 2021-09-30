import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';

type CustomAppProps = AppProps & { emotionCache: EmotionCache };

export default CustomAppProps;
