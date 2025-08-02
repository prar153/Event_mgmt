import React from "react";
import { Button, DatePicker, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
const Eventform = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const newEvent = {
      id: Date.now(), 
      title: values.Title,
      description: values.Description,
      venue: values.Venue,
      date: values.Date.format("YYYY-MM-DD"), 
    };

    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    storedEvents.push(newEvent);
    localStorage.setItem("events", JSON.stringify(storedEvents));

    message.success("Event added successfully!");
    navigate("/"); 
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <>
      <h2 className="text-red">Add New Event</h2>
      <Form {...formItemLayout} style={{ maxWidth: 600 }} onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="Title"
          rules={[{ required: true, message: "Please write the title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[{ required: true, message: "Please write the description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Venue"
          name="Venue"
          rules={[{ required: true, message: "Please write the venue!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="Date"
          rules={[{ required: true, message: "Please select the date!" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Eventform;
