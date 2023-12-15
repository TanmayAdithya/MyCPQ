import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Dashboard;
