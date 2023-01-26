import localFont from '@next/font/local';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { AppProps } from 'next/app';

const myFont = localFont({
    src: '../fonts/NeueMetanaNext-SemiBold.otf',
    variable: '--font-neue'
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className={myFont.variable}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
