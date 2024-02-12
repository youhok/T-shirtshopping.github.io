import publicLayout from "@/layout/publicLayout.vue"

const route = [
    {
        path: '/',
        name: 'public',
        component: publicLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/T-ShirtHome.vue'),
            },
            {
                path: '/t-shirts-store/product/t-shirt-name-1',
                name: 'produstshirt-1',
                component: () => import('../views/produstDetail/Shirtone.vue'),
            },
            {
                path: '/t-shirts-store/product/t-shirt-name-2',
                name: 'produstshirt-2',
                component: () => import('../views/produstDetail/Shirttwo.vue'),
            },
            {
                path: '/t-shirts-store/product/t-shirt-name-3',
                name: 'produstshirt-3',
                component: () => import('../views/produstDetail/ShirtThree.vue'),
            },
            {
                path: '/t-shirts-store/product/t-shirt-name-4',
                name: 'produstshirt-4',
                component: () => import('../views/produstDetail/Shirtfour.vue'),
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
                path: '/t-shirts-store/Employee',
                name: 'employee',
                component: () => import('../views/Employee.vue')
            },
        ]
    },
]

export default route