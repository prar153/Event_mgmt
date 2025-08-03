import { DatePicker, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import useLocalStorageEvents from "../hooks/useLocalStorageEvents";
import isEventConflict from "../utils/isEventConflict";

const EventForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { events, addEvent } = useLocalStorageEvents();

  const onFinish = (values) => {
    const newEvent = {
      id: Date.now(),
      title: values.Title,
      description: values.Description,
      venue: values.Venue,
      date: values.Date.format("YYYY-MM-DD"),
    };

    if (isEventConflict(events, newEvent)) {
      message.error("An event already exists at the same venue and date!");
      return;
    }

    addEvent(newEvent);
    message.success("Event added successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-center text-2xl text-black font-semibold mb-4">
        Add New Event
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
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default EventForm;
