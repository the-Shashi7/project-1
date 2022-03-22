import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable';

const NotFound = Loadable(lazy(() => import("./NotFound")));
const ForgotPassword = Loadable(lazy(() => import("./ForgotPassword")));
const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));

const sessionRoutes = [
    {
        path: '/signup',
        element: <JwtRegister />,
    },
    {
        path: '/admin/signin',
        element: <JwtLogin />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/404',
        element: <NotFound />,
    },
]

export default sessionRoutes
