import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-16 bg-gray-700 py-3 px-8">
      <img
        className="w-16"
        src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-7 text-2xl text-white font-semibold">
         <Menu to={'/'} title={'Home'}/>
         <Menu to={'/product'} title={'Products'}/>
      </div>
    </div>
  );
};

const Menu = ({ to, title }) => {
  return (
     <NavLink className={({isActive}) => isActive ? 'text-[tomato]' : ''} to={to} >{title}</NavLink> 
  )
};

export default Navbar;
