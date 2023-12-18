import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-8 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
