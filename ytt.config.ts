import { defineConfig } from 'yapi-to-typescript';

const config = [
    {
        // 分类ids，可以将多个分类中的接口信息生成到同一个ts文件中
        ids: [59],
        // 输出的ts文件存储模块文件夹名称，如本配置将输出到 src/ytt-typing/index.ts中
        name: 'login',
        token: '25f374d369df0c03df57fb8cb23382c6a379f38eb2239aeb5408f4cc9405b692',
    },
];

const createCategories = function (ids: number[]) {
    return ids.map((id) => ({
        id,
        // 自定义ts中interface名称生成规则
        getRequestFunctionName(interfaceInfo: any, changeCase: any) {
            // path肯定是唯一的
            const list = interfaceInfo.path.split('/') as string[];
            // 添加method用于区分post，get，put请求可能path相同
            const firstWord = list[0].toLowerCase();
            if (!/^get|^post|^put|^delete/.test(firstWord)) {
                list.unshift(interfaceInfo.method);
            }
            return changeCase.camelCase(list.join(' '));
        },
    }));
};

export default defineConfig(
    config.map((item) => ({
        // 1. 此处配置yapi的访问地址
        serverUrl: 'http://yapi.realai-inc.cn',
        typesOnly: false,
        target: 'typescript',
        reactHooks: {
            enabled: false,
        },
        prodEnvName: 'production',
        outputFilePath: `src/ytt-type/${item.name}/index.ts`,
        requestFunctionFilePath: `src/ytt-type/${item.name}/request.ts`,
        dataKey: 'data',
        projects: [
            {
                // 2. 此处配置yapi项目的访问token
                token: item.token,
                categories: createCategories(item.ids),
            },
        ],
    })),
);