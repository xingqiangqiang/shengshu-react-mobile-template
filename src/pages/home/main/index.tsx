import React from 'react';
import styles from './index.module.scss';
import LottiePlayerAnimation from '@/components/lottie-player-animation';
import dayjs from 'dayjs';
import animation from '@/images/lottiefiles/animation.json';
import { Button } from 'antd-mobile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

import { add, reduce } from '../reducer';

interface Props {}

const Index: React.FC<Props> = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(10));
  };
  const handleClickReduce = () => {
    dispatch(reduce());
  };

  return (
    <div className={styles['home']}>
      <div className="box">Home</div>
      <Button color="primary">确定</Button>
      <p>{dayjs('2022-12-12 13:00:00').format('YYYY-MM-DD A HH:mm:ss')}</p>
      <div>
        <Button color="primary" onClick={() => handleClick()}>
          加10
        </Button>
        <Button color="primary" onClick={() => handleClickReduce()}>
          减1
        </Button>
        <div>{count}</div>
      </div>
      <LottiePlayerAnimation jsonFile={animation} playState loop />
    </div>
  );
};

export default React.memo(Index);
