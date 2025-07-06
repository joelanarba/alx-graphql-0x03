// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/ErrorBoundary';
import '@/lib/sentry.client.config'; // 👈 initialize Sentry here

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
