import { TabBar } from 'antd-mobile';

import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

import styles from './index.module.scss';
import url from '@/config/url';

const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: url.app.home.path,
      title: url.app.home.title,
      icon: <AppOutline />,
    },
    {
      key: url.app.todo.path,
      title: url.app.todo.title,
      icon: <UnorderedListOutline />,
    },
    {
      key: url.app.message.path,
      title: url.app.message.title,
      icon: <MessageOutline />,
    },
    {
      key: url.app.mine.path,
      title: url.app.mine.title,
      icon: <UserOutline />,
    },
  ];

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  return (
    <div className={styles.app}>
      <div className="content-layout-body">
        <Outlet />
      </div>
      <div className="content-layout-bottom">
        <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)} safeArea>
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default AppMenu;
