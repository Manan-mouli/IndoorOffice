// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Home from './Pages/Home';
import Employees from './Pages/Employees';
import Teams from './Pages/Teams';
import Products from './Pages/Products';
import Toogle from './Toogle';
import Recrute from './Pages/employee/Recrute';
import Issues from './Pages/Issues';
import Termieted from './Pages/Termieted';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const allRoutes = createBrowserRouter([
  { path:'/employees', element:<Employees /> },
  { path:'/recrute/:employeeId?', element:<Recrute /> },
  { path:'/', element:<Home /> },
  { path:'/toggle', element:<Toogle /> },
  { path:'/teams', element:<Teams /> },
  { path:'/products', element:<Products /> },
  { path:'/issues', element:<Issues /> },
  { path:'/termineted', element:<Termieted /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
