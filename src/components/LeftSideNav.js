import React from "react";
import { FiUsers } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

   const activeStyle = {
      color: "white",
      backgroundColor: "#fb2e2ee9",
      borderRadius: "7px",
   };


   return (
      <div class="flex flex-col gap-[10px] p-[15px] mt-[50px]">
         <NavLink
            to="/addstudent"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
         >
            <div className="flex justify-start items-center p-3 hover:bg-red-500 rounded-[5px] hover:text-white">
               <FiUsers className="text-[20px] mr-[13px] ml-[3px]" />
               <span>Add Student</span>
            </div>
         </NavLink>

         <NavLink
            to="/managestudent"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
         >

            <div className="flex justify-start items-center p-3 hover:bg-red-500  rounded-[5px] hover:text-white">
               <BsListTask className="text-[24px] mr-[13px]" />
               <span>Manage Student</span>
            </div>
         </NavLink >

         <NavLink to="/logout">
            <div className="flex justify-start items-center p-3 hover:bg-red-500  rounded-[5px] hover:text-white">
               <IoIosLogOut className="text-[24px]  mr-[13px]" />
               <span>Logout</span>
            </div>
         </NavLink>
      </div >
   );
};

export default LeftSideNav;
