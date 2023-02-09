import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav';
import Navbar from '../components/Navbar';

const Main = () => {
   return (
      <div>
         <Navbar />
         <LeftSideNav />
         <Outlet />
      </div>
   );
};

export default Main;