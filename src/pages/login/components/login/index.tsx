import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

interface Props {
  changeTopic: (topic: string) => void;
}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate('/app');
  };

  return (
    <div className={styles.login}>
      <div className="login-box">
        <Form
          className="form-login"
          name="basic"
          size="large"
          initialValues={{
            remember: true,
            username: 13939881234,
            password: 1,
          }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: new RegExp(/^1(3|4|5|6|7|8|9)\d{9}$/),
                message: '请输入格式正确的手机号',
              },
            ]}>
            <Input placeholder="请输入手机号" prefix={<MobileOutlined className="icon-gray" />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}>
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined className="icon-gray" />} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
