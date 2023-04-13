/* prettier-ignore-start */
/* tslint:disable */

/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { FileData, Method, QueryStringArrayFormat, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';

// @ts-ignore
import request from './request';

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>;

// Request: 目前 React Hooks 功能有用到
export type Request<
    TRequestData,
    TRequestConfig extends RequestConfig,
    TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
    ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
    : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};

const mockUrl_0_0_0_0 = 'http://yapi.realai-inc.cn/mock/24' as any;
const devUrl_0_0_0_0 = '' as any;
const prodUrl_0_0_0_0 = '' as any;
const dataKey_0_0_0_0 = 'data' as any;

/**
 * 接口 [\/app\/list↗](http://yapi.realai-inc.cn/project/24/interface/api/65) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/app/list`
 * @更新时间 `2020-09-23 11:40:54`
 */
export interface GetMockApiV1AppListRequest {
    page: string;
    offset: string;
}

/**
 * 接口 [\/app\/list↗](http://yapi.realai-inc.cn/project/24/interface/api/65) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/app/list`
 * @更新时间 `2020-09-23 11:40:54`
 */
export type GetMockApiV1AppListResponse = {
    name: string;
    id: number;
    desc: string;
}[];

/**
 * 接口 [\/app\/list↗](http://yapi.realai-inc.cn/project/24/interface/api/65) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/app/list`
 * @更新时间 `2020-09-23 11:40:54`
 */
type GetMockApiV1AppListRequestConfig = Readonly<
    RequestConfig<
        'http://yapi.realai-inc.cn/mock/24',
        '',
        '',
        '/mock/api/v1/app/list',
        'data',
        string,
        'page' | 'offset',
        false
    >
>;

/**
 * 接口 [\/app\/list↗](http://yapi.realai-inc.cn/project/24/interface/api/65) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/app/list`
 * @更新时间 `2020-09-23 11:40:54`
 */
const getMockApiV1AppListRequestConfig: GetMockApiV1AppListRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/mock/api/v1/app/list',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: ['page', 'offset'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getMockApiV1AppList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};

/**
 * 接口 [\/app\/list↗](http://yapi.realai-inc.cn/project/24/interface/api/65) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/app/list`
 * @更新时间 `2020-09-23 11:40:54`
 */
export const getMockApiV1AppList = /*#__PURE__*/ (
    requestData: GetMockApiV1AppListRequest,
    ...args: UserRequestRestArgs
) => {
    return request<GetMockApiV1AppListResponse>(prepare(getMockApiV1AppListRequestConfig, requestData), ...args);
};

getMockApiV1AppList.requestConfig = getMockApiV1AppListRequestConfig;

/**
 * 接口 [\/safe_trend↗](http://yapi.realai-inc.cn/project/24/interface/api/129) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/safe_trend`
 * @更新时间 `2021-03-02 16:33:15`
 */
export interface GetMockApiV1SafeTrendRequest {}

/**
 * 接口 [\/safe_trend↗](http://yapi.realai-inc.cn/project/24/interface/api/129) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/safe_trend`
 * @更新时间 `2021-03-02 16:33:15`
 */
export type GetMockApiV1SafeTrendResponse = {
    key: '高风险' | '中风险' | '低风险';
    value: number;
}[];

/**
 * 接口 [\/safe_trend↗](http://yapi.realai-inc.cn/project/24/interface/api/129) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/safe_trend`
 * @更新时间 `2021-03-02 16:33:15`
 */
type GetMockApiV1SafeTrendRequestConfig = Readonly<
    RequestConfig<'http://yapi.realai-inc.cn/mock/24', '', '', '/mock/api/v1/safe_trend', 'data', string, string, true>
>;

/**
 * 接口 [\/safe_trend↗](http://yapi.realai-inc.cn/project/24/interface/api/129) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/safe_trend`
 * @更新时间 `2021-03-02 16:33:15`
 */
const getMockApiV1SafeTrendRequestConfig: GetMockApiV1SafeTrendRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/mock/api/v1/safe_trend',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getMockApiV1SafeTrend',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};

/**
 * 接口 [\/safe_trend↗](http://yapi.realai-inc.cn/project/24/interface/api/129) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/safe_trend`
 * @更新时间 `2021-03-02 16:33:15`
 */
export const getMockApiV1SafeTrend = /*#__PURE__*/ (
    requestData?: GetMockApiV1SafeTrendRequest,
    ...args: UserRequestRestArgs
) => {
    return request<GetMockApiV1SafeTrendResponse>(prepare(getMockApiV1SafeTrendRequestConfig, requestData), ...args);
};

getMockApiV1SafeTrend.requestConfig = getMockApiV1SafeTrendRequestConfig;

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/24/interface/api/1754) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/login`
 * @更新时间 `2021-12-06 11:15:17`
 */
export interface GetMockApiV1LoginRequest {
    username: string;
    password: string;
}

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/24/interface/api/1754) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/login`
 * @更新时间 `2021-12-06 11:15:17`
 */
export interface GetMockApiV1LoginResponse {
    /**
     * 用户Id
     */
    userId: string;
}

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/24/interface/api/1754) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/login`
 * @更新时间 `2021-12-06 11:15:17`
 */
type GetMockApiV1LoginRequestConfig = Readonly<
    RequestConfig<
        'http://yapi.realai-inc.cn/mock/24',
        '',
        '',
        '/mock/api/v1/login',
        'data',
        string,
        'username' | 'password',
        false
    >
>;

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/24/interface/api/1754) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/login`
 * @更新时间 `2021-12-06 11:15:17`
 */
const getMockApiV1LoginRequestConfig: GetMockApiV1LoginRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/mock/api/v1/login',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: ['username', 'password'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getMockApiV1Login',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/24/interface/api/1754) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/login`
 * @更新时间 `2021-12-06 11:15:17`
 */
export const getMockApiV1Login = /*#__PURE__*/ (
    requestData: GetMockApiV1LoginRequest,
    ...args: UserRequestRestArgs
) => {
    return request<GetMockApiV1LoginResponse>(prepare(getMockApiV1LoginRequestConfig, requestData), ...args);
};

getMockApiV1Login.requestConfig = getMockApiV1LoginRequestConfig;

/**
 * 接口 [获取用户信息↗](http://yapi.realai-inc.cn/project/24/interface/api/1757) 的 **请求类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/userInfo/{userId}`
 * @更新时间 `2021-12-06 11:19:08`
 */
export interface GetMockApiV1UserInfoUserIdRequest {
    userId: string;
}

/**
 * 接口 [获取用户信息↗](http://yapi.realai-inc.cn/project/24/interface/api/1757) 的 **返回类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/userInfo/{userId}`
 * @更新时间 `2021-12-06 11:19:08`
 */
export interface GetMockApiV1UserInfoUserIdResponse {
    /**
     * 用户名
     */
    username: string;
}

/**
 * 接口 [获取用户信息↗](http://yapi.realai-inc.cn/project/24/interface/api/1757) 的 **请求配置的类型**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/userInfo/{userId}`
 * @更新时间 `2021-12-06 11:19:08`
 */
type GetMockApiV1UserInfoUserIdRequestConfig = Readonly<
    RequestConfig<
        'http://yapi.realai-inc.cn/mock/24',
        '',
        '',
        '/mock/api/v1/userInfo/{userId}',
        'data',
        'userId',
        'userId',
        false
    >
>;

/**
 * 接口 [获取用户信息↗](http://yapi.realai-inc.cn/project/24/interface/api/1757) 的 **请求配置**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/userInfo/{userId}`
 * @更新时间 `2021-12-06 11:19:08`
 */
const getMockApiV1UserInfoUserIdRequestConfig: GetMockApiV1UserInfoUserIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/mock/api/v1/userInfo/{userId}',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: ['userId'],
    queryNames: ['userId'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'getMockApiV1UserInfoUserId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};

/**
 * 接口 [获取用户信息↗](http://yapi.realai-inc.cn/project/24/interface/api/1757) 的 **请求函数**
 *
 * @分类 [公共分类↗](http://yapi.realai-inc.cn/project/24/interface/api/cat_59)
 * @请求头 `GET /mock/api/v1/userInfo/{userId}`
 * @更新时间 `2021-12-06 11:19:08`
 */
export const getMockApiV1UserInfoUserId = /*#__PURE__*/ (
    requestData: GetMockApiV1UserInfoUserIdRequest,
    ...args: UserRequestRestArgs
) => {
    return request<GetMockApiV1UserInfoUserIdResponse>(
        prepare(getMockApiV1UserInfoUserIdRequestConfig, requestData),
        ...args,
    );
};

getMockApiV1UserInfoUserId.requestConfig = getMockApiV1UserInfoUserIdRequestConfig;

/* prettier-ignore-end */
