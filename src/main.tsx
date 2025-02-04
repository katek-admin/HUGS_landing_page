import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './styles/index.css';
import ReactDOM from 'react-dom/client'
import React from 'react'
import PublicOffer from './pages/PublicOffer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/public-offer",
    element: <PublicOffer />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
