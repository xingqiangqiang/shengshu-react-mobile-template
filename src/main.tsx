import store from '@/store';
import { App as AntdApp, ConfigProvider, Spin } from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';

import App from './App';
import './index.css';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Spin tip="页面加载中..." />}>
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ConfigProvider>
            <AntdApp>
              <App />
            </AntdApp>
          </ConfigProvider>
        </BrowserRouter>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
);
