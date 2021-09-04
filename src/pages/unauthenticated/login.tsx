import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth';
import React from 'react';

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login({ username: values.username, password: values.password });
  };

  return (
    <Form onFinish={handleSubmit}>
      {/* Username */}
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder="用户名" />
      </Form.Item>

      {/* Password */}
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input placeholder="密码" />
      </Form.Item>

      {/* Action */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
