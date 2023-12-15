import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Customers from './pages/Customers.jsx';
import Analytics from './pages/Customers.jsx';
import Products from './pages/Products.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/customers',
        element: <Customers />,
      },
      {
        path: '/dashboard/analytics',
        element: <Analytics />,
      },
      {
        path: '/dashboard/products',
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
