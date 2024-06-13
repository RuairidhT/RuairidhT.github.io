import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';

export const Wrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
