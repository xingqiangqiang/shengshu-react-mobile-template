import noMatch from '@/images/common/403.png';
import { Button } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const NoPermission: React.FC = () => {
  const navigate = useNavigate();
  const backLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={noMatch} alt="404" />
      <div>抱歉，超出访问许可</div>
      <div className={styles.btns}>
        <Button fill="none" onClick={() => navigate(-1)}>
          返回上一级
        </Button>
        <Button fill="none" onClick={backLogin}>
          切换账号
        </Button>
      </div>
    </div>
  );
};

export default NoPermission;
