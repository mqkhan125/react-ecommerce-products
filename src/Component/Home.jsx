import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);

  // Fetch featured products here
  useEffect(() => {
    axios("https://fakestoreapi.com/products?limit=4")
      .then((res) => setFeatured(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* hero section  */}
      <section className="relative min-h-screen flex items-center bg-[#0b0f19] text-white overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-blue-400 font-medium mb-4 tracking-wider uppercase">
              New Collection 2026
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Shopping Experience
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Discover premium products curated for style, comfort, and
              performance. Quality meets affordability in every collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/product")}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition duration-300 text-lg font-medium shadow-lg"
              >
                Shop Now
              </button>

              <button className="px-8 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition duration-300 text-lg">
                Explore More
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop"
              alt="Hero Product"
              className="relative w-[450px] md:w-[520px] object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto p-6">
        {[
          { name: "Electronics", icon: "💻" },
          { name: "Jewelery", icon: "💎" },
          { name: "Men's Clothing", icon: "👔" },
          { name: "Women's Clothing", icon: "👗" },
        ].map((cat, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl text-center cursor-pointer 
            overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Glow Hover Effect */}
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition duration-300 rounded-2xl"></div>

            {/* Icon */}
            <div className="text-4xl mb-4 transition duration-300 group-hover:scale-110">
              {cat.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tracking-wide group-hover:text-blue-400 transition">
              {cat.name}
            </h3>

            {/* Small Description */}
            <p className="text-sm text-gray-400 mt-2 opacity-80">
              Explore premium collection
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
