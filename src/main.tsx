import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Home.tsx'
import Topic from './pages/Topic.tsx'
import Root from './routes/root.tsx';

import "@fontsource/source-sans-pro";
import './index.css'
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'topic/:topicId',
        element: <Topic />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
