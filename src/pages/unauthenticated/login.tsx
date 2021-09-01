import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import React from 'react';

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login({ username: values.username, password: values.password });
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleSubmit}>
      {/* Username */}
      <Form.Item label="用户名" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      {/* Password */}
      <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input />
      </Form.Item>

      {/* Action */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
