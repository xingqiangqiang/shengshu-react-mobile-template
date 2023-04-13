import React from 'react';

interface PropsType {
  name: string;
  color?: string;
  size?: string;
  style?: any;
}

const SvgIcon: React.FC<PropsType> = ({ name, color, size, style }) => {
  const symbolId = `#icon-${name}`;
  return (
    <svg aria-hidden="true" width={size} height={size} style={style}>
      <use href={symbolId} color={color} />
    </svg>
  );
};

export default SvgIcon;
