import { RootState } from '@/store';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { add, reduce } from '../reducer';

const IndexView = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(add(10));
  };
  const handleClickReduce = () => {
    dispatch(reduce());
  };

  return (
    <div>
      <Button type="primary" onClick={() => handleClick()}>
        加10
      </Button>
      <Button type="primary" onClick={() => handleClickReduce()}>
        减1
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default IndexView;
