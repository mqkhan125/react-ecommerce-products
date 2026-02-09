import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await axios("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4 p-6 bg-[#0c0c0c]">
      {products.map((product) => {
        return <ProductsCard product={product} key={product.id} />;
      })}
    </div>
  );
};

const ProductsCard = ({ product }) => {
  return (
    <div className="group bg-gray-700 rounded-lg text-white">
      <img
        className="aspect-square object-contain p-4"
        src={product.image}
        alt=""
      />

      <div className="p-5">
        <h1 className="text-2xl line-clamp-2 group-hover:text-blue-400">{product.title}</h1>

        {/* rating and count of reviews */}
        <div className="flex gap-3 my-3">
          <p className="bg-green-600 w-fit py-1 px-4 rounded-lg flex items-center text-sm">
            <span className="mb-1 me-1">⭐</span>
            <span>{product.rating.rate}</span>
          </p>
          <p>{product.rating.count} reviews</p>
        </div>

        <p className="text-xl font-medium">${product.price}</p>
      </div>

    </div>
  );
};

export default Product;
