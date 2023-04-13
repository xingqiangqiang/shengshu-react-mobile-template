import url from '@/config/url';
import { SpinLoading } from 'antd-mobile';
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const { root, login, notFound, app, noPermission } = url;

const Routers: React.FC = () => {
  const renderRouter = (routers: RouteObject[]): RouteObject[] => {
    return routers.map((item: RouteObject) => {
      if (item.children) {
        return {
          ...item,
          children: renderRouter(item.children),
        };
      }
      return {
        ...item,
        element: <React.Suspense fallback={<SpinLoading />}>{item.element}</React.Suspense>,
      };
    });
  };

  return useRoutes(
    renderRouter([
      {
        path: root,
        element: <Navigate to={login.path} />,
      },
      {
        path: login.path,
        element: <login.component />,
      },
      {
        path: app.path,
        element: <app.component />,
      },
      {
        path: notFound.path,
        element: <notFound.component />,
      },
      {
        path: noPermission.path,
        element: <noPermission.component />,
      },
    ]),
  );
};

export default Routers;
