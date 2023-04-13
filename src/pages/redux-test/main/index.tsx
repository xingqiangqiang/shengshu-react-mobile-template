import { RootState } from '@/store';
import { Button } from 'antd-mobile';
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
      <Button color="primary" onClick={() => handleClick()}>
        加10
      </Button>
      <Button color="primary" onClick={() => handleClickReduce()}>
        减1
      </Button>
      <div>{count}</div>
    </div>
  );
};

export default IndexView;
