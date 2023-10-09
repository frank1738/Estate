import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <NavLink to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Savanna</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </NavLink>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline hover:underline text-slate-700">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hidden sm:inline hover:underline text-slate-700">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className=" sm:inline hover:underline text-slate-700">
            <NavLink to="/sign-up">SignIn</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
