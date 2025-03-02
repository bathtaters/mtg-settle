import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import App from './components/App';
// import reportWebVitals from './services/subservices/reportWebVitals';
import ErrorBoundary from './components/subcomponents/ErrorBoundary';
import * as Sentry from "@sentry/react";

if (process.env.REACT_APP_SENTRY) Sentry.init({
  dsn: process.env.SENTRY,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: [/^https:\/\/settle\.gg/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
