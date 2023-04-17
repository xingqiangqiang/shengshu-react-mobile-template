### vscode 安装插件 (**必须**)

- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 环境依赖

```
node >=16.14
pnpm >=3
```

### 安装依赖包

```
pnpm install
```

### 启动项目

```
pnpm dev
```

### 格式化代码

```
pnpm prettier
```

### 检查 scss 样式

```
pnpm stylelint
```

### scss规范

```
采用国际通用规范recommended-scss
采用stylelint对scss代码自动校验纠错
规范参考文档：https://stylelint.io/user-guide/rules/

模块内scss规范：
1. 组件根样式命名：功能-模块名（例如：.footer-todos）
2. 所有组件内部不能使用id，只能使用class(命名以-方式分隔主要单词，如：fa-close)
3. 工程集成了compass，充分使用compass提供的所有功能！！
4. 基于react组件单根的特点，所以组件内样式也采用单根形式
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

### 提交规范

```
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

可以参考：http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
```

### yapi-to-typescript

```
1.修改 ytt.config.ts 中 token 切换工程（打开 yapi 项目->设置->token 配置->复制 token）
2.执行 pnpm ytt 生成 src/api 里的文件
```