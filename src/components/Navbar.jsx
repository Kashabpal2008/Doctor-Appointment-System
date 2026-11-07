import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import {
  FiMenu,
  FiX,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const mobileNavClass =
    "block py-3 font-semibold text-slate-700 hover:text-green-500 transition";

      const navigate = useNavigate();
        const handleRedirect = () => {
    navigate('/BookAppointment'); 
  };

  return (
    <nav className="relative flex h-20 w-full items-center justify-between bg-red-50 px-6">

      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="h-16 w-auto"
      />

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 lg:flex">

        <NavLink
          to="/"
          className="font-bold text-black hover:text-green-500 hover:underline transition-all duration-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="font-bold text-black hover:text-green-500 hover:underline transition-all duration-300"
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className="font-bold text-black hover:text-green-500 hover:underline transition-all duration-300"
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className="font-bold text-black hover:text-green-500 hover:underline transition-all duration-300"
        >
          Contact
        </NavLink>

      </div>

      {/* Desktop Buttons */}
      <div className="hidden items-center gap-5 lg:flex">

        <button
          onClick={handleRedirect}
          className="rounded bg-green-600 px-4 py-2 text-white transition
          hover:bg-white hover:text-green-500 hover:border hover:border-black"
        >
          Book an Appointment
        </button>

        <button
          className="rounded border border-green-600 px-4 py-2
          text-green-500 transition hover:bg-green-500
          hover:text-white hover:font-bold"
        >
          Sign In
        </button>

      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-slate-700 transition
        hover:bg-slate-100 lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <FiX size={25} /> : <FiMenu size={25} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 top-20 z-50 w-full
        border-t border-slate-100 bg-white shadow-lg lg:hidden">

          <nav className="flex w-full flex-col px-6 py-4">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={mobileNavClass}
            >
              Contact
            </NavLink>

            {/* Phone */}
            <a
              href="tel:+919876543210"
              onClick={closeMenu}
              className="mt-3 flex items-center gap-2
              border-t border-slate-100 px-4 pt-4
              text-sm font-medium text-slate-700"
            >
              <FiPhone
                size={17}
                className="text-green-600"
              />

              +91 98765 43210
            </a>

            {/* Sign Up */}
            <NavLink
              to="/sign-up"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center
              gap-2 rounded-lg bg-green-600 px-5 py-3
              font-semibold text-white transition
              hover:bg-green-700"
            >
              <FiUser size={17} />
              Sign Up
            </NavLink>

          </nav>
        </div>
      )}

    </nav>
  );
};

export default Navbar;