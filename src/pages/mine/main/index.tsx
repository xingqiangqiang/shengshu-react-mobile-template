import React from 'react';
import styles from './index.module.scss';

interface Props {}

const Index: React.FC<Props> = () => {
  return <div className={styles['mine']}>mine</div>;
};

export default React.memo(Index);
