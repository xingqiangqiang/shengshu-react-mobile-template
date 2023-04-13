/** 将bytes转化为B、KB、MB、GB
 * @example
 * getSizeText(500) => 500B
 */
export const getSizeText = (size: number) => {
  let sizeText;
  if (size < 1024) {
    sizeText = `${size}B`;
  } else if (size < 1024 * 1024) {
    sizeText = `${(size / 1024).toFixed(2)}KB`;
  } else if (size < 1024 * 1024 * 1024) {
    sizeText = `${(size / 1024 / 1024).toFixed(2)}MB`;
  } else {
    sizeText = `${(size / 1024 / 1024 / 1024).toFixed(2)}GB`;
  }
  return sizeText;
};
