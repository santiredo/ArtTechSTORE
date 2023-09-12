import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux/store.ts'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-bmewhnl6c5tr886s.us.auth0.com"
          clientId="2sXnU51ibdteMmbhOjNb42oTthkRMkkg"
          authorizationParams={{
            redirect_uri: 'http://127.0.0.1:5173/home'
          }}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)