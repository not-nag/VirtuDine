// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/global.css'; // Import your global CSS fileZ

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
