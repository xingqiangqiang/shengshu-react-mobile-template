import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    // 将文件放在public下，直接引用绝对路径，会自动找public下的文件
    `${import.meta.env.BASE_URL}iconfont/iconfont.js`,
    '//at.alicdn.com/t/c/font_4001669_9uqzcgewya8.js',
  ],
});
export default IconFont;
