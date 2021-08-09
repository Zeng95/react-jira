import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import React from 'react';

const LoginPage: React.FC = () => {
  const { user, login } = useAuth();

  const handleSubmit = ({ username, password }: { username: string; password: string }) => {
    login({ username, password });
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleSubmit}>
      {user ? <div>登录成功，用户名: {user.name}</div> : null}

      {/* 用户名 */}
      <Form.Item label="用户名" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
      {/* 密码 */}
      <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input />
      </Form.Item>
      {/* 按钮 */}
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
        &nbsp;&nbsp;
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
