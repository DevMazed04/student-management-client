import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
   return (
      <div className="navbar mb-5 px-10">
         <div className="navbar-start">
            <Link to="/"
               className="font-semibold text-xl">LOGO
            </Link>
         </div>

         <div className="navbar-end">
            <div className='flex justify-center items-center gap-3 border px-8 py-[5px] rounded-md'>
               <AiOutlineUser className='text-xl' />
               <Link className="">username@gmail.com</Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;