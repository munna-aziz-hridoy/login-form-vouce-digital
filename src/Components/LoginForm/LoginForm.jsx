import React, { useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import bannerImg from "../../Assets/banner.png";

const LoginForm = () => {
  const [errorText, setErrorText] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (values) => {
    setErrorText("");
    setToken("");
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (data?.error) {
      setErrorText(data.error);
    }
    if (data?.token) {
      setToken(data.token);
    }
  };
  return (
    <div className="flex h-[94vh]">
      <div className="w-full md:w-1/3 flex justify-center items-center p-3 flex-col gap-3">
        <h2 className="text-primary text-4xl font-bold text-center">
          Welcome back
        </h2>
        <p className="text-primary text-center mb-9">
          Please login to get a free trial
        </p>
        <Form
          className="w-full md:w-[80%]"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 26,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" placeholder="Email Address *" />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password size="large" placeholder="Password *" />
          </Form.Item>

          {errorText ? <p className="text-danger my-3">{errorText}</p> : ""}
          {token ? (
            <p className="text-primary my-3">
              Your Token: <span className="text-success">{token}</span>
            </p>
          ) : (
            ""
          )}

          <Button
            type="primary"
            size="large"
            className="bg-primary"
            block
            htmlType="submit"
          >
            Submit
          </Button>
          <div className="flex justify-between items-center my-4">
            <Checkbox className="text-primary font-semibold">
              Remember Me
            </Checkbox>
            <p className="text-primary font-semibold">Forgot password?</p>
          </div>
        </Form>
      </div>
      <div className="hidden md:flex md:w-2/3 bg-primary justify-center items-center">
        <img src={bannerImg} className="w-[85%]" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
