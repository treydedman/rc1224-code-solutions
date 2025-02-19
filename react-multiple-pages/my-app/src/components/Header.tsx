import { Outlet, Link } from 'react-router-dom';

type Props = {
  onNavigate: (page: string) => void;
};
export function Header({ onNavigate }: Props) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <div onClick={() => onNavigate('about')} className="text-white">
              <Link to="/about" className="text-white">
                About
              </Link>
            </div>
          </li>
          <li className="inline-block py-2 px-4">
            <Link to="/" className="text-white">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
      <Outlet />
    </div>
  );
}
