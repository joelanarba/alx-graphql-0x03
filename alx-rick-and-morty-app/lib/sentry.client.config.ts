// lib/sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://YOUR_DSN_HERE.ingest.sentry.io/YOUR_PROJECT_ID', // Replace with your actual DSN from Sentry
  tracesSampleRate: 1.0,
  debug: true, // Only in development, remove in prod
});
