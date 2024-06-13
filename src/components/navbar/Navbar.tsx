import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { router } from '../../main';
import { NavLinks } from './NavLinks';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const routes = router.routes[0].children;

  return (
    <div className="flex flex-col">
      <nav className="flex justify-around bg-slate-800/90 py-4 border-b border-slate-700 w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <Link to={'/'} className="cursor-pointer">
            <h3 className="text-2xl font-medium text-slate-100 hover:text-slate-400">
              Ruairidh Taylor
            </h3>
          </Link>
        </div>

        <div className="items-center hidden space-x-8 lg:flex">
          {routes!.map((route) => (
            <NavLinks route={route} key={route.id} />
          ))}
        </div>

        <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
          <li>
            <a
              href="https://www.github.com/ruairidht"
              target="_blank"
              aria-label="Github"
              className="text-slate-200 hover:text-slate-400"
            >
              <FaGithub size={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ruairidht/"
              target="_blank"
              aria-label="linkedin"
              className="text-slate-200 hover:text-slate-400"
            >
              <FaLinkedin size={28} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
