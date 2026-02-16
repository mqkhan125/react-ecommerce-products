import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({search, handleSearch}) => {
  const navigate = useNavigate();
 

  return (
    <nav className="sticky top-0 z-50 bg-[#0c0c0c] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="w-10"
            src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
            alt="logo"
          />
          <span className="text-xl font-bold tracking-wide">ShopZone</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Menu to="/" title="Home" />
          <Menu to="/product" title="Products" />
        </div>

        <div className="flex items-center gap-4">
 
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block bg-gray-800 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
           onChange={handleSearch} value={search}/>

   
          <select className="hidden md:block bg-gray-800 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition">
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>


          <div className="relative cursor-pointer">
            <span className="absolute -top-2 -right-2 bg-blue-600 text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative transition ${
          isActive ? "text-blue-400" : "hover:text-blue-400"
        }`
      }
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
