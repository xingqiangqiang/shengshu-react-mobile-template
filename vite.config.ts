/** @typing {import("vite").UserConfig} */
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import postCssPresetEnv from 'postcss-preset-env';
import postCssPxToViewport from 'postcss-px-to-viewport';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import progress from 'vite-plugin-progress';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const cssnano = require('cssnano');
const cssnanoPresetAdvanced = require('cssnano-preset-advanced');

const projectName = '生数科技移动端title';
const port = 8080;
const base = '/';
console.log('当前环境:', process.env.NODE_ENV);

export default defineConfig({
  base,
  envDir: 'src',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[ext]/[name].[hash].[ext]',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port,
    open: `http://localhost:${port}${base}`,
    proxy: {
      '/mock/api/v1': {
        target: 'http://yapi.realai-inc.cn',
        // 有base时要重写代理
        // rewrite: (path) => path.replace(/^\/base/, ''),
        // changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/images/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    }),
    // 详见 https://github.com/vbenjs/vite-plugin-html
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.tsx',
      template: 'index.html',
      inject: {
        data: {
          title: projectName,
          injectScript: `<script src="./inject.js" type="module"></script>`,
        },
      },
    }),
    progress(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[path]_[name]_[local]_[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assats/style/normalize.scss";
          @import "@/assats/style/variables.scss";
          @import "@/assats/style/mixin.scss";`,
      },
    },
    postcss: {
      plugins: [
        postCssPxToViewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          // exclude: [],
          landscape: false, // 是否处理横屏情况
          // landscapeUnit: 'vh',
          // landscapeWidth: 568
        }),
        cssnano({
          preset: [
            cssnanoPresetAdvanced,
            {
              autoprefixer: false,
              zindex: false,
            },
          ],
        }),
        postCssPresetEnv(),
      ],
    },
  },
});
