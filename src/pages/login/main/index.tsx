import url from '@/config/url';
import { Button, Form, Input } from 'antd-mobile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleLogin = () => {
    form.validateFields().then((values) => {
      console.log(values);
      navigate(url.app.home.path, { replace: true });
    });
  };

  return (
    <div className={styles.login}>
      <Form form={form} layout="vertical" aria-autocomplete="none">
        <Form.Item label="用户名">
          <Input />
        </Form.Item>
        <Form.Item label="密码">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button color="primary" onClick={handleLogin}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
