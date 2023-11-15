import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Navbar = () => {
  return (
    <header className="w-full p-10 bg-[#EE0000] text-white flex">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            width={100}
            height={60}
            className="m-0 w-[80px] h-[50px] bg-white"
            alt="Logo"
          />
        </Link>
        <ul className="flex-1 flex justify-center  md:block">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden">
          <img src={hamburger} alt="Hamburger icon" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
