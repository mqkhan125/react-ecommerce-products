import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopZone</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover premium products at the best prices. Quality, trust, and
            fast delivery guaranteed.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
            <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition" />
            <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className="hover:text-blue-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="hover:text-blue-400 transition">
                Products
              </NavLink>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">
              Electronics
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Jewelery
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Men's Clothing
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Women's Clothing
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: support@shopzone.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: New York, USA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
