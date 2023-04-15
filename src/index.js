import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
     domain="dev-pel7q5prxannics2.us.auth0.com"
     clientId="PtDcJbYto7mSfcyT04u44hLT6ZKbpTFG"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
