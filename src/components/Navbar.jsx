import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ closeMenu }) => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50">
      {/* Close Button */}
      <IoMdClose
        className="text-2xl cursor-pointer absolute top-4 right-4"
        onClick={closeMenu}
      />

      {/* Menu Items */}
      <ul className="space-y-4 mt-10 text-black">
        <li className="font-semibold">
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="/page5" onClick={closeMenu}>
            Settings
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="/page7" onClick={closeMenu}>
            Direct WhatsApp
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="#" onClick={closeMenu}>
            Block Number
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="#" onClick={closeMenu}>
            Total Message Sent
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="/shareapp" onClick={closeMenu}>
            Referral Earn
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="/page7" onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
        <li className="font-semibold">
          <Link to="/register">Register</Link>
        </li>
        <ul className="ml-4 text-gray-600">
          <li>
            <Link to="/singleuser" onClick={closeMenu}>
              • Single User
            </Link>
          </li>
          <li>
            <Link to="/corporateuser" onClick={closeMenu}>
              • Corporate User
            </Link>
          </li>
        </ul>

        <li className="font-semibold">
          <Link to="/" onClick={closeMenu}>
            <button className="w-full bg-purple-600 text-white rounded-full py-2 mt-4 text-lg">
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
