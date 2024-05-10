import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';


const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
function ContactForm() {
  return (
    <>
    <center>
      <h2 style={{fontSize: "40px" , marginLeft:"80px"}}>Contact Information</h2>
      <br />
      <p style={{color:"gray" , marginLeft:"80px"}}>"Give Open Minded FeedBack According to Your Perspection...!"</p><br />
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input type='text' placeholder='Enter Your Name' />
    </Form.Item>


    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input type='email ' placeholder='Enter Your Email' />
    </Form.Item>


    <Form.Item
      label="Feedback"
      name="Your Message"
      rules={[
        {
          required: true,
          message: 'Please input your Message!',
        },
      ]}
    >
      <Input type='textarea ' placeholder='Enter Your Message....' />
    </Form.Item>
   

   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  className='button'>
        Send FeedBack
      </Button>
    </Form.Item>
  </Form>
  </center>
    </>
  )
}

export default ContactForm
