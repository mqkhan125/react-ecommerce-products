import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Product = () => {

  const [products, setProducts] = useState([])

   const fetchProducts = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products')
      console.log(response.data)
      setProducts(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(() => {
      fetchProducts()
    },[])

  return (
    <div className='max-w-full grid grid-cols-5 bg-amber-500 '>
      {
        products.map((product) => {
          return (
            <ProductsCard product={product} key={product.id} />
          );
        })
      }
    </div>
  )
}

const ProductsCard = ({product}) => {
  return(
   <div className='group bg-gray-700 rounded-lg'>
    <img className='aspect-square object-contain p-4 group-hover:scale-95 transition-all duration-300' src={product.image} alt="" />
    
    <div className='p-4'>
      <h1 className='text-2xl line-clamp-2 group-hover:text-blue-400 '>{product.title}</h1>
    </div>
     
     <div className='flex gap-5 py-3'>
      <p className='bg-green-500 flex gap-4 items-center py-2 px-3'></p>
      <span></span>
      <span>{product.rating.rate}</span>
     </div>
   </div>
  )
}

export default Product