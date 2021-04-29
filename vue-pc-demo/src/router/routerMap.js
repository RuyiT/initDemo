const routerMap = [
  {
    path: '/',
    name: 'home',
    // component: () => import('@/views/layout'),
    redirect: '/home',
    meta: {
      authConfig: {
        mustLogin: false, // 不需要管理员权限
      },
    },
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: '/home/blog',
        component: () => import('@/views/home'),
        children: [
          {
            path: 'bbb',
            name: 'bbb',
            component: () =>
              /* webpackChunkName: "bbb" */ import('@/views/bbb.vue'),
          },
          {
            path: 'blog',
            name: 'blog',
            component: () =>
              /* webpackChunkName: "blog" */ import('@/views/blog.vue'),
          },
        ],
      },
      {
        path: 'ccc',
        name: 'ccc',
        component: () => /* webpackChunkName: "ccc" */ import('@/views/ccc'),
      },
    ],
  },
  {
    path: '*', // 未知路由
    redirect: '/home/blog',
  },
]
export default routerMap
