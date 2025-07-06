// components/ErrorBoundary.tsx

import React, { ReactNode } from 'react';
import * as Sentry from '@sentry/react'; // 👈 Import Sentry

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 👇 Send the error to Sentry
    Sentry.captureException(error, { extra: errorInfo });
    console.error("Logged to Sentry:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
