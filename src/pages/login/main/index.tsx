import React, { useEffect, useState } from 'react';

import LoginBox from '../components/login';
import styles from './index.module.scss';

const Login: React.FC = () => {
  /* 计算跟字体大小 REM 对根元素 */
  const htmlFontSize = () => {
    const docWidth = document.documentElement.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    const countFontSize = Math.round(100 * (docWidth / 1440));
    htmlDom.style.fontSize = `${countFontSize}px`;
  };

  useEffect(() => {
    window.addEventListener('resize', htmlFontSize);
    htmlFontSize();
    return () => {
      window.removeEventListener('resize', htmlFontSize);
    };
  }, []);

  const [topic, setTopic] = useState('欢迎登录');
  const changeTopic = (topic: string) => {
    setTopic(topic);
  };

  return (
    <div className={styles.login}>
      <div className={styles['login-container']}>
        <div className={styles['welcom-bg']}>
          <div className={styles['text-welcome']}>{topic}</div>
        </div>
        <LoginBox changeTopic={changeTopic} />
      </div>
    </div>
  );
};
export default Login;
