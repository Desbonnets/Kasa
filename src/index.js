import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './route/App';
import Erreur404 from './route/Erreur404';
import A_Propos from './route/A_Propos';
import Accueil from './route/Accueil';
import Fiche_Logement from './route/Fiche_logement';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: '/A_Propos',
        element: <A_Propos />,
      },
      {
        path: '/Fiche_Logement/:id',
        element: <Fiche_Logement />,
      },
      {
        path: '*',
        element: <Erreur404 />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
