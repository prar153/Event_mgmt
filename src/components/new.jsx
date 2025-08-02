



import React, { useState } from "react";
import { DesktopOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items = [
  { key: "/", icon: <DesktopOutlined />, label: "Event List" },
  { key: "/add", icon: <DesktopOutlined />, label: "Add Event" },
  { key: "/edit/1", icon: <DesktopOutlined />, label: "Event Update" }, // just for navigation
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
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
         <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EventLayout;
