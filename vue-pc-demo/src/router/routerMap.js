const routerMap = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: 'home',
    meta: {
      authConfig: {
        mustLogin: false, // 不需要管理员权限
      },
    },
    children: [
      {
        path: 'home',
        name: 'home',
        redirect: '/home/aaa',
        component: () => import('@/views/home'),
        children: [
          {
            path: 'bbb',
            name: 'bbb',
            component: () =>
              /* webpackChunkName: "bbb" */ import('@/views/bbb.vue'),
          },
          {
            path: 'aaa',
            name: 'aaa',
            component: () =>
              /* webpackChunkName: "aaa" */ import('@/views/aaa.vue'),
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
    redirect: '/home/aaa',
  },
];
export default routerMap;
