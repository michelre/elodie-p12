import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    /*errorElement: <ErrorPage />,*/
    children: [
      {
        path: "users/:userId",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
