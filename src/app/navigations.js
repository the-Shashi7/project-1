export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        name: 'Appointments',
        path: '/appointments',
        icon: 'event',
    },
    {
        name: 'Doctor',
        path: '/doctors',
        icon: 'assignment_ind',
    },
    {
        name: 'Patients',
        path: '/patients',
        icon: 'accessibility',
    },
    {

        name: "Diagnostics",
        path: "/reports",
        icon: "assignment",
        children:[
            {
                name: 'Diagnostics Center',
                path: '/diagnostics',
                iconText: 'SI',

            },
            {
                name: 'Activities',
                path: '/medicine/tests ',
            }
        ]
    },
    {
        name: "Ecommerce",
        path: "/products",
        icon: "shopping_cart",
        children:[
                    {
                        name: 'Products',
                        path: '/products',
                        iconText: 'SI',
        
                    },
                    {
                        name: 'Categories',
                        path: '/products/categories',
                    },
                    {
                        name: 'Sub categories',
                        path: '/products/Subcategories',
                    },
                    {
                        name: 'Advertisements',
                        path: '/products/advertisements',
                    }
                ]
    },
    {
        name: "Orders",
        path: "/orders",
        icon: "shopping_cart",
        children:[
                    {
                        name: 'Products',
                        path: '/products',
                        iconText: 'SI',
        
                    },
                   
                ]
    },
    {
        name: "Pharmacy",
        path: "/orders",
        icon: "shopping_cart",
        children:[
                    {
                        name: 'Products',
                        path: '/products',
                        iconText: 'SI',
        
                    },
                   
                ]
    },
    {
        name: 'Notifications',
        path: '/notifications',
        icon: 'accessibility',
    }, 
    {
        name: 'Admin',
        path: '/admins',
        icon: 'accessibility',
    },
    // {
    //     name: 'Settings',
    //     path: '/settings',
    //     icon: 'settings',
    // },
    // {
    //     label: 'PAGES',
    //     type: 'label',
    // },
    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    {
        label: 'Components',
        type: 'label',
    },
    {
        name: 'Components',
        icon: 'favorite',
        badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Auto Complete',
                path: '/material/autocomplete',
                iconText: 'A',
            },
            {
                name: 'Buttons',
                path: '/material/buttons',
                iconText: 'B',
            },
            {
                name: 'Checkbox',
                path: '/material/checkbox',
                iconText: 'C',
            },
            {
                name: 'Dialog',
                path: '/material/dialog',
                iconText: 'D',
            },
            {
                name: 'Expansion Panel',
                path: '/material/expansion-panel',
                iconText: 'E',
            },
            {
                name: 'Form',
                path: '/material/form',
                iconText: 'F',
            },
            {
                name: 'Icons',
                path: '/material/icons',
                iconText: 'I',
            },
            {
                name: 'Menu',
                path: '/material/menu',
                iconText: 'M',
            },
            {
                name: 'Progress',
                path: '/material/progress',
                iconText: 'P',
            },
            {
                name: 'Radio',
                path: '/material/radio',
                iconText: 'R',
            },
            {
                name: 'Switch',
                path: '/material/switch',
                iconText: 'S',
            },
            {
                name: 'Slider',
                path: '/material/slider',
                iconText: 'S',
            },
            {
                name: 'Snackbar',
                path: '/material/snackbar',
                iconText: 'S',
            },
            {
                name: 'Table',
                path: '/material/table',
                iconText: 'T',
            },
        ],
    },
    // {
    //     name: 'Charts',
    //     icon: 'trending_up',

    //     children: [
    //         {
    //             name: 'Echarts',
    //             path: '/charts/echarts',
    //             iconText: 'E',
    //         },
    //     ],
    // },
    // {
    //     name: 'Documentation',
    //     icon: 'launch',
    //     type: 'extLink',
    //     path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
]
