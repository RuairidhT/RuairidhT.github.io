import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home.tsx';
import { Projects } from './pages/Projects.tsx';
import { CV } from './pages/CV.tsx';
import { Certifications } from './pages/Certifications.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Wrapper } from './components/Wrapper.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        id: 'Home'
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
        id: 'Projects'
      },
      {
        path: "/certifications",
        element: <Certifications />,
        errorElement: <ErrorPage />,
        id: 'Certifications'
      },
      {
        path: "/cv",
        element: <CV />,
        errorElement: <ErrorPage />,
        id: 'CV'
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center mt-32" x-cloak x-data="appData()" x-init="appInit()">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
