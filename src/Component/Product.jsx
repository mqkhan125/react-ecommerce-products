import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response = await axios("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) return <Loader className={'p-30'}/>


  return (
    <div className="grid grid-cols-5 gap-4 p-6 bg-[#0c0c0c] max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1">
      {products.map((product) => {
        return <ProductsCard product={product} key={product.id} />;
      })}
    </div>
  );
};

const ProductsCard = ({ product }) => {
  
  const navigate = useNavigate();

 return (
   <div
     onClick={() => navigate(`/product/${product.id}`)}
     className="group cursor-pointer bg-gray-800 rounded-xl overflow-hidden text-white 
               shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 "
   >
     {/* Image */}
     <div className="bg-gray-900 flex justify-center items-center p-4">
       <img
         className="h-52 object-contain transition-transform duration-300 group-hover:scale-110"
         src={product.image}
         alt={product.title}
       />
     </div>

     {/* Content */}
     <div className="p-5">
       <h1 className="text-lg font-semibold line-clamp-2 group-hover:text-blue-400 transition">
         {product.title}
       </h1>

       {/* Rating */}
       <div className="flex items-center gap-3 my-3 text-sm">
         <span className="bg-green-600 px-3 py-1 rounded-md flex items-center gap-1">
           ⭐ {product.rating.rate}
         </span>
         <span className="text-white/70">{product.rating.count} reviews</span>
       </div>

       {/* Price */}
       <p className="text-2xl font-bold text-blue-400">${product.price}</p>
     </div>
   </div>
 );

};

export default Product;
