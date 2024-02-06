import publicLayout from "@/layout/publicLayout.vue"

const route = [
    {
        path: '/',
        name: 'public',
        component: publicLayout,
        children: [
            {
                path: '/t-shirts-store',
                name: 'home',
                component: () => import('../views/T-ShirtHome.vue')
            },
            {
                path: '/t-shirts-store/about',
                name: 'about',
                component: () => import('../views/About.vue')
            },
            {
                path: '/t-shirts-store/contact',
                name: 'contact',
                component: () => import('../views/Contact.vue')
            },
            {
                path: '/t-shirts-store/menshirt',
                name: 'menshirt',
                component: () => import('../views/Menshirt.vue')
            },
            {
                path: '/t-shirts-store/womenshirt',
                name: 'womenshirt',
                component: () => import('../views/Womenshirt.vue')
            },
            {
                path: '/t-shirts-store/buyTshirt',
                name: 'buyTshirt',
                component: () => import('../views/BuyTshirt.vue')
            },
            {
                path: '/t-shirts-store/Employee',
                name: 'employee',
                component: () => import('../views/Employee.vue')
            },
        ]
    },
]

export default route