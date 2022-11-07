import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
Sentry.init({
  dsn: "https://7112871b975c4b21a6f85870ac927e5f@o4504115734380544.ingest.sentry.io/4504115735822336",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
