// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/global.css'; // Import your global CSS file
import Head from 'next/head';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');
</style>

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
