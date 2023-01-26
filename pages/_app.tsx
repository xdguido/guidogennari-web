import localFont from '@next/font/local';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';

import SEO from '../next-seo.config';

const myFont = localFont({
    src: '../fonts/NeueMetanaNext-SemiBold.otf',
    variable: '--font-neue'
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className={myFont.variable}>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
