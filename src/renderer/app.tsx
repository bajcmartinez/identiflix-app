import { createRoot } from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { StrictMode } from 'react'
import Welcome from './pages/welcome'
import Login from './pages/login'
import Browse from './pages/browse'
import Watch from './pages/watch'

const router = createHashRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watch/:videoId",
    element: <Watch />,
  },
]);

const root = createRoot(document.body);
root.render(
    <RouterProvider router={router} />
);
