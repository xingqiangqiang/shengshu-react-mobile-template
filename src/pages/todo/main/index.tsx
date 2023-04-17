import React from 'react';
import styles from './index.module.scss';

interface Props {}

const Index: React.FC<Props> = () => {
  return <div className={styles['todo']}>todo</div>;
};

export default React.memo(Index);
