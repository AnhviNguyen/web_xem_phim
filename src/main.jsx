import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss';
import {store} from "./store/store";
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);