import { TabBar } from 'antd-mobile';

import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

import styles from './index.module.scss';

const AppMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: '/app/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/app/todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/app/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/app/mine',
      title: '我的',
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
