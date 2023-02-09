import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav';
import Navbar from '../components/Navbar';

const Main = () => {
   return (
      <div>
         <Navbar />

         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
            <div class="col-span-1">
               <LeftSideNav />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-4 border">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default Main;