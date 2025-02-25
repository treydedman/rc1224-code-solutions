import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={`menu-drawer ${
          isOpen ? 'w-56' : 'w-16'
        } border-r shadow-[2px_0_10px_rgba(0,0,0,0.2)]`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 text-2xl bg-transparent border-none focus:outline-none focus:ring-0">
          <FaBars />
        </button>
        <div
          className={`font-bold text-lg px-4 py-2 mt-[5px] ${
            isOpen ? 'block' : 'hidden'
          }`}>
          Hylian Shopping
        </div>
        <ul className="mt-4">
          {menuItems.map((menu) => (
            <li key={menu.name} className="py-2 px-4 flex items-center">
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  `flex  ${
                    isActive ? 'bg-gray-300 text-black' : 'hover:bg-gray-200'
                  }`
                }>
                <img src={menu.iconUrl} alt={menu.name} className="w-6 h-6" />
                {isOpen && <span className="ml-2 text-black">{menu.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
