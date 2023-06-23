import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import "./login.less";
import { setToken } from "@/utils/auth";
import { HOME_URL } from "@/utils/config"
import { Redirect } from 'react-router-dom';
// import apis from "@/apis";


const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [isLogin, setLoginStatus] = useState(false);
  const onLogin = () => {
    // apis.user.login(form.getFieldsValue()).then((v: any) => {
    //   setToken("12121313");
    //   console.log(v)
    //   setLoginStatus(true);
    // });
  }
  return (
    <div className='rs-login'>
      {
        isLogin ? <Redirect to={HOME_URL}></Redirect> : null
      }
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={() => {
            onLogin()
          }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;