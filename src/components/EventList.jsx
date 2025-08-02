import React, { useEffect, useState } from "react";
import { Table, Button, Tag, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
    message.success("Event deleted successfully");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        const isPast = dayjs(date).isBefore(dayjs(), "day");
        return (
          <Tag color={isPast ? "red" : "green"}>
            {dayjs(date).format("YYYY-MM-DD")}
          </Tag>
        );
      },
    },
    {
      title: "Venue",
      dataIndex: "venue",
      key: "venue",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => navigate(`/edit/${record.id}`)}>
            Edit
          </Button>
          <Popconfirm
            title="Delete this event?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Event List - ebPearls Pvt. Ltd, Kupondole, Lalitpur</h2>
      <Button type="primary" onClick={() => navigate("/add")}>
        Add Event
      </Button>
      <Table
        dataSource={events}
        columns={columns}
        rowKey="id"
        style={{ marginTop: 16 }}
      />
    </div>
  );
};

export default EventList;
