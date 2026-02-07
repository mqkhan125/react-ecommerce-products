import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center gap-16 bg-gray-700 py-3 px-8'>
       <img className='w-16' src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png" alt="" />
    <div className='flex gap-7 text-2xl'>
       <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
    </div>
    </div>
  )
}

export default Navbar