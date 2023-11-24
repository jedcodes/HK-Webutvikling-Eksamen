import  { useState } from "react";
import { navLinks } from "../constants";
import { RiMenu5Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {logo} from '../assets/images'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="sm:px-8 px-4 py-10 z-10 w-full bg-[#EE0000] text-white">
        <nav className="flex justify-between items-center max-container">
          <Link to="/" className="text-3xl font-bold">
            <img src={logo} className="w-20 h-20 bg-white" alt="" />
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-2xl text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
          <RiMenu5Fill className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-[#EE0000] text-white ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RiCloseFill className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center mb-5 h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                    to={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;