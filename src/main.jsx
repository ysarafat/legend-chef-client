import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Contexts/AuthProviders';
import router from './Routers/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
    </React.StrictMode>
);
