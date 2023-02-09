import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddStudent from '../pages/AddStudent';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import ManageStudent from '../pages/ManageStudent';


export const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <Main />,
         children: [
            {
               path: "/",
               element: <AddStudent />
            },
            {
               path: "/addstudent",
               element: <AddStudent />
            },
            {
               path: "/managestudent",
               element: <ManageStudent />
            },
            {
               path: "/login",
               element: <Login />
            },
            {
               path: "/logout",
               element: <Logout />
            }
         ]
      },
      {
         path: "*",
         element: <p>Page Not Found...</p>
      }
   ]
)