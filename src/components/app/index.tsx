import LottiePlayerAnimation from '@/components/lottie-player-animation';
import ReduxTest from '@/pages/redux-test/main';
import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

import animation from './animation.json';
import styles from './index.module.scss';

const AppMenu: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className="box">box</div>
      <Button type="primary">确定</Button>
      <p>{dayjs('2022-12-12 13:00:00').format('YYYY-MM-DD A HH:mm:ss')}</p>
      <ReduxTest />
      <LottiePlayerAnimation jsonFile={animation} playState loop />
    </div>
  );
};

export default AppMenu;
