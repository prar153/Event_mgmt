import { useState } from "react";
import {
  DesktopOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  { key: "/", icon: <DesktopOutlined />, label: "Event List" },
  { key: "/add", icon: <UserAddOutlined />, label: "Add Event" },
];

const EventLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout className="h-screen overflow-hidden">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          padding: "4px",
          margin: "10px",
          backgroundColor: "white",
          borderRadius: "30px",
        }}
      >
        <div className="h-10 m-4 text-center text-green-800 text-xl font-bold">
          Menu
        </div>
        <Menu
          style={{ backgroundColor: "white" }}
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={items}
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout>
        <Header
          className="px-4 m-2 rounded-lg flex items-center "
          style={{ background: colorBgContainer }}
        >
          <div className="flex-1 text-center text-green-800 text-2xl font-bold -ml-8">
            Event Management System
          </div>

          <div style={{ width: "24px" }}></div>
        </Header>
        <Content className="p-6 m-2 rounded-lg bg-white ">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default EventLayout;
