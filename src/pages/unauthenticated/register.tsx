import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth';
import React from 'react';

const RegisterPage: React.FC = () => {
  const { register } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    register({ username: values.username, password: values.password });
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
        <Button type="primary" htmlType="submit" className="w-full">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;
