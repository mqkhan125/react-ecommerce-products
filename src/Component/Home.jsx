import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductCard";
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

              <button className="px-8 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition duration-300 text-lg text-black">
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
      <h2 className="text-3xl font-semibold text-center mt-16 mb-6">
        Product Categories
      </h2>
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
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition duration-300 rounded-2xl"></div>

            <div className="text-4xl mb-4 transition duration-300 group-hover:scale-110">
              {cat.icon}
            </div>

            <h3 className="text-lg font-semibold tracking-wide group-hover:text-blue-400 transition">
              {cat.name}
            </h3>

            <p className="text-sm text-gray-400 mt-2 opacity-80">
              Explore premium collection
            </p>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0c0c0c] text-white px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-blue-500">ShopZone</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide the best shopping experience with premium products, fast
            delivery, and secure payments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center
    hover:-translate-y-3 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            {/* Icon */}
            <div
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
      bg-blue-600/10 rounded-full text-3xl group-hover:scale-110 transition"
            >
              🚚
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Fast Delivery
            </h3>

            <p className="text-gray-400 text-sm">
              Get your products delivered quickly and safely anywhere in the
              world.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center
    hover:-translate-y-3 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <div
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
      bg-blue-600/10 rounded-full text-3xl group-hover:scale-110 transition"
            >
              💳
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Secure Payment
            </h3>

            <p className="text-gray-400 text-sm">
              Your transactions are fully encrypted and protected for safe
              checkout.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center
    hover:-translate-y-3 transition duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <div
              className="w-16 h-16 mx-auto mb-6 flex items-center justify-center
      bg-blue-600/10 rounded-full text-3xl group-hover:scale-110 transition"
            >
              ⭐
            </div>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              Premium Quality
            </h3>

            <p className="text-gray-400 text-sm">
              We carefully select high-quality products to ensure customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c0c0c] to-[#111827] text-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 mb-8">
            Get the latest products, exclusive offers, and updates delivered to
            your inbox.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="
          w-full sm:w-96 px-5 py-4
          bg-gray-800/80 backdrop-blur-sm
          border border-gray-700
          sm:rounded-l-xl sm:rounded-r-none rounded-xl
          outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition-all duration-300
        "
            />

            <button
              className="
              ms-8
          w-full sm:w-auto
          px-8 py-4
          bg-gradient-to-r from-blue-600 to-blue-500
          hover:from-blue-500 hover:to-blue-400
          sm:rounded-r-xl sm:rounded-l-none rounded-xl
          font-semibold
          shadow-lg shadow-blue-600/20
          hover:shadow-blue-500/40
          hover:scale-105
          transition-all duration-300
        "
            >
              Subscribe
            </button>
          </div>

          {/* Small note */}
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
