import AnalyticsIcon from '../assets/icons/AnalyticsIcon.jsx';
import ProductsIcon from '../assets/icons/ProductsIcon.jsx';
import CustomersIcon from '../assets/icons/CustomersIcon.jsx';
import DashboardIcon from '../assets/icons/DashboardIcon.jsx';
import logoInverse from '../assets/images/MyCPQ Logo Inverse.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const liClass =
    'group mb-6 w-full flex justify-start items-center p-2 hover:bg-light-yellow border-solid border-0 rounded transition-colors duration-100 ease-in-out';
  const pClass = 'group-hover:text-cpq-blue text-lg text-light-yellow';

  const sidebarData = [
    {
      id: 0,
      title: 'Dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      id: 1,
      title: 'Customers',
      path: '/dashboard/customers',
      icon: <CustomersIcon />,
    },
    {
      id: 2,
      title: 'Products',
      path: '/dashboard/products',
      icon: <ProductsIcon />,
    },
    {
      id: 3,
      title: 'Analytics',
      path: '/dashboard/analytics',
      icon: <AnalyticsIcon />,
    },
  ];
  return (
    <aside className="flex flex-col bg-cpq-blue min-h-screen w-64 items-start p-8">
      <a className="w-full" href="/">
        <div className="flex items-center border-b border-light-yellow w-full">
          <img className="w-12 object-cover mr-2" src={logoInverse} />
          <p className="font-custom ml-1 text-left text-light-yellow text-3xl mt-6 mb-6 w-full">
            MyCPQ
          </p>
        </div>
      </a>
      <ul className="flex flex-col items-start w-full mt-8 ">
        {sidebarData.map((item) => {
          return (
            <div className="w-full" key={item.id}>
              <Link className="w-full" to={item.path}>
                <li className={liClass}>
                  {item.icon}
                  <p className={pClass}>{item.title}</p>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
