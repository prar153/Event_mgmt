import { Button as AntButton } from "antd";

const Button = ({ children, ...props }) => {
  return (
    <AntButton {...props} className="!rounded-md !font-medium">
      {children}
    </AntButton>
  );
};

export default Button;
