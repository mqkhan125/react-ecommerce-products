import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleProducts = () => {

   const {id} = useParams()
   const [product, setProducts] = useState({})


   const fetchData = async () => {
    // fetch single product data using id
    const response = await axios(`https://fakestoreapi.com/products/${id}`)
    setProducts(response.data)
   }

   useEffect(() => {
    fetchData()
   },[])

return (
  <div className="min-h-screen bg-[#0c0c0c] flex justify-center items-center p-6">
    <div className="max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
      {/* Product Image */}
      <div className="flex justify-center items-center bg-gray-900 rounded-xl">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-80 h-80 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col text-white">
        <h1 className="text-3xl font-semibold mb-4">{product?.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-green-600 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
            ⭐ {product?.rating?.rate}
          </span>
          <span className="text-white/70 text-sm">
            {product?.rating?.count} reviews
          </span>
        </div>

        {/* Price */}
        <p className="text-4xl font-bold text-blue-400 mb-6">
          ₹ {product?.price}
        </p>

        {/* Description */}
        <p className="text-white/80 leading-relaxed mb-8">
          {product?.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl text-lg font-medium">
            Add to Cart
          </button>
          <button className="flex-1 border border-blue-500 hover:bg-blue-500/10 transition py-3 rounded-xl text-lg font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
);


};

export default SingleProducts

