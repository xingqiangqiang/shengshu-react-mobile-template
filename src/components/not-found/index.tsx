import noMatch from '@/images/common/404.png';
import { Button } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.img} src={noMatch} alt="404" />
      <div>抱歉，页面不存在</div>
      <Button fill="none" onClick={() => navigate(-1)}>
        返回上一级
      </Button>
    </div>
  );
};

export default NotFound;
