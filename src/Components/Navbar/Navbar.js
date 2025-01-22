import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbUserExclamation } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white text-black px-10 flex items-center justify-between flex-wrap relative">
      <div className="flex items-center space-x-1">
        <img
          src="/FurniroIcon.png"
          alt="Furniro Logo"
          className="w-12 h-12 object-contain"
        />
        <div className="text-2xl font-bold">
          <a href="/">FURNIRO</a>
        </div>
      </div>

      {/* Links visible on medium and larger screens */}
      <div className="flex space-x-16 text-lg hidden md:flex">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Shop</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </div>

      {/* Icons visible on medium and larger screens */}
      <div className="flex space-x-6 hidden md:flex">
        <a href="#" className="text-xl hover:text-gray-400">
          <TbUserExclamation />
        </a>
        <a href="#" className="text-xl hover:text-gray-400">
          <FaRegHeart />
        </a>
        <a href="#" className="text-xl hover:text-gray-400">
          <CiSearch />
        </a>
        <a href="#" className="text-xl hover:text-gray-400">
          <MdOutlineShoppingCart />
        </a>
      </div>

      {/* Hamburger icon for smaller screens */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-xl">
          &#9776; {/* Hamburger Icon */}
        </button>
      </div>

      {/* Right-side Slider (Visible when menuOpen is true) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-xl text-black absolute top-4 right-4"
          >
            &#10005; {/* Close Icon */}
          </button>

          {/* Slider Content */}
          <div className="flex flex-col items-center space-y-6 mt-12">
            <a href="/" className="text-lg hover:text-gray-400">Home</a>
            <a href="/shop" className="text-lg hover:text-gray-400">Shop</a>
            <a href="/about" className="text-lg hover:text-gray-400">About</a>
            <a href="/contact" className="text-lg hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
