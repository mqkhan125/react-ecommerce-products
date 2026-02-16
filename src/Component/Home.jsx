import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

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
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Style
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Shop the latest trends with the best prices and premium quality.
          </p>
          <button
            onClick={() => navigate("/product")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg transition"
          >
            Shop Now
          </button>
        </section>

            </>
  );
};

export default Home;
