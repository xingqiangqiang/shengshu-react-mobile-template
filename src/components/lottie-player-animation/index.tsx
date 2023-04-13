import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect } from 'react';

import styles from './index.module.scss';

interface PropsType {
  /**
   * json动画文件
   */
  jsonFile: object;
  /**
   * 播放状态(true:播放动画，false:停止播放)
   */
  playState?: boolean;
  className?: string;
  loop?: boolean;
  onStateChange?: (state: boolean) => void;
  onClick?: () => void;
}

const LottiePlayerAnimation: React.FC<PropsType> = ({
  jsonFile,
  playState,
  className,
  loop = false,
  onStateChange,
  onClick,
}) => {
  const player = React.useRef<Player>(null);

  useEffect(() => {
    setTimeout(() => {
      playState ? player.current?.play() : player.current?.stop();
    }, 200);
  }, [playState]);

  const onEvent = (state: string) => {
    /**
     * 播放结束后向父组件发送状态
     */
    if (['stop', 'complete'].includes(state)) {
      if (onStateChange) {
        onStateChange(false);
      }
      if (loop) {
        player.current?.play();
      }
    }
  };

  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      <Player className="lottie-player" onEvent={onEvent} ref={player} src={jsonFile} loop={loop} />
    </div>
  );
};

export default LottiePlayerAnimation;
