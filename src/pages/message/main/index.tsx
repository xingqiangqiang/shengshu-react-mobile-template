import React from 'react';
import styles from './index.module.scss';

interface Props {}

const Index: React.FC<Props> = () => {
  return <div className={styles['message']}>message</div>;
};

export default React.memo(Index);
