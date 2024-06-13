import { Link, useLocation } from 'react-router-dom';

type NavLinksProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route: any;
};

export const NavLinks = ({ route }: NavLinksProps) => {
  const location = useLocation();
  const isCurrent = location.pathname === route.path;

  return (
    <Link
      to={route.path}
      className={`flex text-slate-300 hover:text-slate-400 cursor-pointer transition-colors duration-300 ${isCurrent && 'font-semibold'}`}
    >
      {route.id}
    </Link>
  );
};
