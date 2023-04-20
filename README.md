#### 项目结构
```javascript
├── README.md
├── build  
│   └── build.sh            // 构建命令
├── commitlint.config.js    
├── imagemin.map.json       // 压缩过的图片映射
├── imagemin.mjs            // 执行build命令之前执行的图片压缩操作
├── index.html              
├── package.json
├── pnpm-lock.yaml
├── public                  // 公共资源路径
│   ├── favicon.ico
│   └── iconfont
├── src
│   ├── App.tsx
│   ├── api                 // 接口请求封装，api声明地址
│   ├── assets              // 资产目录
│   ├── components          // 公共组件
│   ├── config              // 公共配置
│   ├── images              // 项目图片相关
│   ├── index.css
│   ├── main.tsx            // 主入口
│   ├── pages               // 项目页面
│   ├── store               // store数据仓库
│   ├── typing              // 全局ts定义
│   ├── utils               // 工具函数定义
│   ├── vite-env.d.ts       // vite常量声明
│   └── ytt-type            // yapi-to-typescript接口类型生成目录
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts          // vite配置
└── ytt.config.ts           // yapi配置
```
##### vscode安装插件
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
##### 环境依赖
```bash
node >=16.14
pnpm >=3
```
##### 安装依赖包
```bash
pnpm i
pnpm run install
```
##### 启动项目
```bash
pnpm run dev
```
##### 检查代码规范
```bash
pnpm run eslint
```
##### 格式化代码
```bash
pnpm run prettier
```
##### 检查样式
```bash
pnpm run stylelint
```
##### 构建代码
```bash
pnpm run build
```
- 为什么使用[pnpm](https://www.pnpm.cn/cli/add)，点击[查看👉](https://juejin.cn/post/6932046455733485575)
#### 开发配置
##### [vite配置](https://cn.vitejs.dev/config/)
项目构建工具使用vite，修改配置在根目录路下 `vite.config.ts` 进行配置
- 配置代理服务器 `vite.config.ts`
```javascript
'/mock/api/v1': {
    target: 'http://xxx.xxxx.xxx',
    rewrite: (path) => path.replace(/^\/base/, ''),
    changeOrigin: true,
},
```
- 配置接口前缀和资源路径 `.env.development` `.env.production`
```javascript
VITE_API_URL = /api
VITE_SOURCE_URL = http://x.x.x.x:xxxx/
```
##### css模块化规范
```scss
采用国际通用规范recommended-scss
采用stylelint对scss代码自动校验纠错
规范参考文档：https://stylelint.io/user-guide/rules/

模块内scss规范：
1. 组件根样式命名：功能-模块名（例如：.footer-todos）
2. 所有组件内部不能使用id，只能使用class(命名以-方式分隔主要单词，如：fa-close)
3. 基于react组件单根的特点，所以组件内样式也采用单根形式
.footer-todos {
  height: 20px;
  display: block;

  :global {
      .filters{
          font-size: 14px;
      }
      .clear-completed{
          overflow: hidden;
      }
  }
}
```
##### [提交规范](https://commitlint.js.org/#/)
```javascript
格式：<type>(<scope>): <subject>
type: 用于说明commit的类别，中允许使用以下7个标识。
      feat：新功能（feature）
      fix：修补bug
      docs：文档（documentation）
      style： 格式（不影响代码运行的变动）
      refactor：重构（即不是新增功能，也不是修改bug的代码变动）
      test：增加测试
      chore：构建过程或辅助工具的变动
scope: 用于说明commit的影响范围，比如store,reducer,view,根据不同位置来决定。
subject: 是commit的简短描述，不超过50个字符。
      1.以动词开头，使用第一人称现在时，比如change，而不是changed或changes
      2.第一个字母小写
      3.结尾不加句号（.）
```
##### [yapi-to-typescript](https://fjc0k.github.io/yapi-to-typescript/handbook/)
```javascript
1.修改 ytt.config.ts 中 token 切换工程（打开 yapi 项目->设置->token 配置->复制 token）
2.执行 pnpm ytt 生成 src/api 里的文件
```