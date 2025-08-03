import { DatePicker, Form, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import useLocalStorageEvents from "../hooks/useLocalStorageEvents";
import isEventConflict from "../utils/isEventConflict";

const Eventedit = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { events, updateEvent, getEventById } = useLocalStorageEvents();

  useEffect(() => {
    const current = getEventById(id);
    if (current) {
      form.setFieldsValue({
        Title: current.title,
        Description: current.description,
        Venue: current.venue,
        Date: dayjs(current.date),
      });
    } else {
      message.error("Event not found!");
      navigate("/");
    }
  }, [id, form, getEventById, navigate]);

  const onFinish = (values) => {
    const updatedEvent = {
      id: Number(id),
      title: values.Title,
      description: values.Description,
      venue: values.Venue,
      date: values.Date.format("YYYY-MM-DD"),
    };

    if (isEventConflict(events, updatedEvent)) {
      message.error("An event already exists at the same venue and date!");
      return;
    }

    updateEvent(updatedEvent);
    message.success("Event updated successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-center text-2xl text-black font-semibold mb-4">
        Edit Event
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <TextInput
          label="Title"
          name="Title"
          rules={[{ required: true, message: "Please write the title!" }]}
        />
        <TextInput
          label="Description"
          name="Description"
          isTextArea
          rules={[{ required: true, message: "Please write the description!" }]}
        />
        <TextInput
          label="Venue"
          name="Venue"
          rules={[{ required: true, message: "Please write the venue!" }]}
        />
        <Form.Item
          label="Date"
          name="Date"
          rules={[{ required: true, message: "Please select the date!" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
        <div className="text-center mt-4">
          <Form.Item noStyle>
            <Button
              style={{ backgroundColor: "green", color: "white" }}
              htmlType="submit"
            >
              Update
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Eventedit;
