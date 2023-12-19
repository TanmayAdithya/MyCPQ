import AnalyticsIcon from '../assets/icons/AnalyticsIcon.jsx';
import ProductsIcon from '../assets/icons/ProductsIcon.jsx';
import CustomersIcon from '../assets/icons/CustomersIcon.jsx';
import DashboardIcon from '../assets/icons/DashboardIcon.jsx';
import logoInverse from '../assets/images/MyCPQ Logo Inverse.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const liClass =
    'group mb-6 w-full flex justify-start items-center p-2 hover:bg-white border-solid border-0 rounded transition-colors duration-100 ease-in-out';
  const pClass = 'group-hover:text-cpq-blue text-lg text-white';

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
    <aside className="relative min-h-screen flex flex-col bg-cpq-blue w-64 items-start px-8 pt-2 pb-8 shadow-sm shadow-gray-500">
      {/* <div className="absolute left-54 bg-white border-0 rounded-[50%] shadow-sm shadow-gray-700 cursor-pointer hover:-rotate-180 transition-transform  p-3"> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="10"
        viewBox="0 0 320 512"
      >
        <path
          fill="#002244"
          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        />
      </svg>
      {/* </div> */}
      <a className="w-full" href="/">
        <div className="flex items-center border-b border-white w-full">
          <img className="w-12 object-cover mr-2" src={logoInverse} />
          <p className="font-custom ml-1 text-left text-white text-3xl mt-6 mb-6 w-full">
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
