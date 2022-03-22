import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';
import Medicines from './Medicine';
import Dashboard from "./Dashboard";
import Appoinment from './Appointment';
import Doctors from './doctor/Doctors';
import Patients from './patients/Patients';
import Reports from './Reports';
import Products from './products/products';
import Categories from './products/categories';
import SubCategories from './products/subCategories';
import Advertisements from './products/advertisements';

const dashboardRoutes = [
    {
        path: '/dashboard/',
        element: <Dashboard />,
    },
    {
        path: '/appointments',
        element:<Appoinment/>
    },
    {
        path: '/doctors',
        element:<Doctors/>
    },
    {
        path: '/patients',
        element:<Patients/>
    },
    {
        path: '/products',
        element:<Products/>,

    },
    {
        path: '/products/categories',
        element:<Categories/>,

    },
    {
        path: '/products/subCategories',
        element:<SubCategories/>,

    },
    {
        path: '/products/advertisements',
        element:<Advertisements/>,

    },    

    {
        path: '/reports',
        element:<Reports/>
    }
]

export default dashboardRoutes
