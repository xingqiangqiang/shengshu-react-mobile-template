import { lazy } from 'react';

/**
 * ！！！ 注意 ！！！
 * 路由配置的path字段必须和后端表里维护的routeAddress一致，否则可能导致权限控制失败
 */

const router = {
  root: '/',
  login: {
    path: '/login',
    title: '统一登录',
    component: lazy(() => import('@/pages/login/main')),
  },
  notFound: {
    path: '*',
    title: '404',
    component: lazy(() => import('@/components/not-found')),
  },
  noPermission: {
    path: '/no-permission',
    title: '无权限',
    component: lazy(() => import('@/components/no-permission')),
  },
  app: {
    path: '/app',
    title: 'app',
    component: lazy(() => import('@/components/app')),
  },
};

export default router;
