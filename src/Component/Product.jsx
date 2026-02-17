import axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useNavigate, useOutletContext } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(false);

  const { search, category } = useOutletContext();

  // Filter products based on search text AND category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });


  

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let response = await axios("https://fakestoreapi.com/products");
      console.log(response.data)
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
      {filteredProducts.map((product) => {
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
     className="group cursor-pointer bg-gray-800 rounded-2xl overflow-hidden text-white
  shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
   >
     {/* Image Section */}
     <div className="relative bg-gray-900 flex justify-center items-center p-6">
       {/* Category Badge */}
       <span className="absolute top-3 left-3 bg-blue-600 text-xs px-3 py-1 rounded-full capitalize">
         {product.category}
       </span>

       <img
         className="h-48 object-contain transition-transform duration-500 group-hover:scale-110"
         src={product.image}
         alt={product.title}
       />
     </div>

     {/* Content */}
     <div className="p-5 flex flex-col h-[260px]">
       {/* Title */}
       <h2 className="text-base font-semibold line-clamp-2 group-hover:text-blue-400 transition">
         {product.title}
       </h2>

       {/* Description */}
       <p className="text-sm text-white/60 line-clamp-2 mt-2">
         {product.description}
       </p>

       {/* Rating */}
       <div className="flex items-center gap-3 mt-3 text-sm">
         <span className="bg-green-600 px-3 py-1 rounded-md flex items-center gap-1">
           ⭐ {product.rating?.rate}
         </span>
         <span className="text-white/50">{product.rating?.count} reviews</span>
       </div>

       {/* Bottom Section */}
       <div className="mt-auto flex items-center justify-between pt-4">
         {/* Price */}
         <p className="text-xl font-bold text-blue-400">${product.price}</p>

         {/* Add to Cart Button */}
         <button
           onClick={(e) => {
             e.stopPropagation();
             console.log("Add to cart");
           }}
           className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-lg transition opacity-0 group-hover:opacity-100"
         >
           Add
         </button>
       </div>
     </div>
   </div>
 );

};

export default Product;
