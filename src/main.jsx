import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Customers from './pages/Customers.jsx';
import Analytics from './pages/Analytics.jsx';
import Products from './pages/Products.jsx';
import Overview from './pages/Overview.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CustomerDetails from './components/CustomerDetails.jsx';
import './index.css';

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
        path: '/dashboard/products',
        element: <Products />,
      },
      {
        path: '/dashboard/analytics',
        element: <Analytics />,
      },
      {
        path: '',
        element: <Overview />,
      },
      {
        path: '/dashboard/customers/addcustomer',
        element: <CustomerDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
