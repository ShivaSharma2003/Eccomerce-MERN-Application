import React from "react";
import {BiUser} from 'react-icons/all'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-14 border-b shadow-md flex flex-row flex-shrink items-center justify-between px-6 ">
      <div>Ecommerce Application</div>
      <div>
        <ul className="flex flex-row gap-6 ">
          <Link to={'/'}><li className='font-bold hover:scale-110 transition-all duration-500 hover:text-blue-500'>Home</li></Link>
          <Link to={'/product'}><li className='font-bold hover:scale-110 transition-all duration-500 hover:text-blue-500'>Products</li></Link>
          <Link to={'/cart'}><li className='font-bold hover:scale-110 transition-all duration-500 hover:text-blue-500'>Cart</li></Link>
          <Link to={'/orders'}><li className='font-bold hover:scale-110 transition-all duration-500 hover:text-blue-500'>Orders</li></Link>
        </ul>
      </div>
      <div><BiUser color="black" fontSize={24} className='cursor-pointer'/></div>
    </div>
  );
};

export default Navbar;
