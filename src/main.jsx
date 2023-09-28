import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Companies from './components/Companies/Companies';
import EditCompany from './components/Companies/EditCompany';
import CreateCompany from './components/Companies/CreateCompany';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    children: [
      {
        path:"companies/",
        element: <Companies />,
      },
      {
        path: "companies/edit/:id",
        element: <EditCompany />
      },
      {
        path: "companies/create",
        element: <CreateCompany />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
