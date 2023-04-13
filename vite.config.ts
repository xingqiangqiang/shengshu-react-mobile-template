/** @typing {import('vite').UserConfig} */
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import progress from 'vite-plugin-progress';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const projectName = '测试title';
const port = 8080;
const base = '/';
console.log('当前环境:', process.env.NODE_ENV);

export default defineConfig({
    base,
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
                    injectScript: `<script src='./inject.js' type='module'></script>`,
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
                additionalData: `@import "@/assats/style/public.scss";
          @import "@/assats/style/variables.scss";
          @import "@/assats/style/mixin.scss";`,
            },
        },
    },
});