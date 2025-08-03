import { Input, Form } from "antd";

const TextInput = ({ label, name, rules, isTextArea = false }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      {isTextArea ? <Input.TextArea /> : <Input />}
    </Form.Item>
  );
};

export default TextInput;
