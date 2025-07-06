// pages/index.tsx

import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import ErrorProneComponent from '../components/ErrorProneComponent';


const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome to Rick and Morty App</h1>
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
