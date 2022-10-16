import '../styles.css';
import '../custom.css';

import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark">
      <>
        <svg height="0px" width="0px">
          <defs>
            <linearGradient
              id="pink-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(156, 81, 161, 1)" />
              <stop offset="70%" stopColor="rgba(255, 30, 86, 1)" />
            </linearGradient>
          </defs>
        </svg>
      </>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
