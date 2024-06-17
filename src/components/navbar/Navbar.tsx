import { FaBars, FaGithub, FaLinkedin, FaRegWindowClose } from 'react-icons/fa';
import { router } from '../../main';
import { NavLinks } from './NavLinks';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Transition } from '@headlessui/react';

export const Navbar = () => {
  const routes = router.routes[0].children;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <nav className=" bg-slate-800/90 py-4 border-b border-slate-700 w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex flex-row justify-around">
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

          <ul className="lg:flex hidden flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
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
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <FaBars /> : <FaRegWindowClose />}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="lg:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {routes!.map((route) => (
                  <NavLinks route={route} key={route.id} />
                ))}
              </div>
              <ul className="px-2 flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
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
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
