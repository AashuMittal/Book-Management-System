import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Logo + Desktop Menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            
            <div className="flex flex-shrink-0 items-center gap-2">
              <FontAwesomeIcon icon={faBook} className="h-6 w-6 text-gray-300" />
              <span className="text-white font-semibold hidden sm:block">Book Store</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link to="/book" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">
                  Available Books
                </Link>
                <Link to="/mybook" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">
                  My Book
                </Link>
                <Link to="/Add" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">
                  Add Books
                </Link>
                <Link to="/registration" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium">
                  Book Registration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-black px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
            Home
          </Link>
          <Link to="/book" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
            Available Books
          </Link>
          <Link to="/mybook" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
            My Book
          </Link>
          <Link to="/Add" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
            Add Books
          </Link>
          <Link to="/registration" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
            Book Registration
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
