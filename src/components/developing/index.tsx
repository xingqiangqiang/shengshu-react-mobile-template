import devImg from '@/images/common/developing.png';
import React from 'react';

import styles from './index.module.scss';

const Developing: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.dev} src={devImg} alt="" />
      <div>开发中，敬请期待</div>
    </div>
  );
};

export default Developing;
