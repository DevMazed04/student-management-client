import React from 'react';
import { FiUsers } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { Link } from 'react-router-dom';



const LeftSideNav = () => {
   return (
      <div class="flex flex-col gap-[10px] p-[15px] border">

         <Link to="/addstudent">
            <div className='flex justify-start items-center p-3 hover:bg-red-500 rounded-[5px] hover:text-white'>
               <FiUsers className='text-[20px] mr-[13px] ml-[3px]' />
               <span>Add Student</span>
            </div>
         </Link>

         <Link to="/managestudent">
            <div className='flex justify-start items-center p-3 hover:bg-red-500 rounded-[5px] hover:text-white'>
               <BsListTask className='text-[24px] mr-[13px]' />
               <span>Manage Student</span>
            </div>
         </Link>

         <Link to="/logout">
            <div className='flex justify-start items-center p-3 hover:bg-red-500 rounded-[5px] hover:text-white'>
               <IoIosLogOut className='text-[24px]  mr-[13px]' />
               <span>Logout</span>
            </div>
         </Link>
      </div>
   );
};

export default LeftSideNav;