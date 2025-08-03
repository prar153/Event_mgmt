import { useEffect, useState } from "react";
import { Table, Tag, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Button from "../components/Button";
import useLocalStorageEvents from "../hooks/useLocalStorageEvents";

const EventList = () => {
  const { events, deleteEvent } = useLocalStorageEvents();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(events); 
  }, [events]);

  const handleDelete = (id) => {
    deleteEvent(id);
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
          <Button style={{color:"green"}} type="link" onClick={() => navigate(`/edit/${record.id}`)}>
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
    <div className="max-w-5xl mx-auto mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Event List</h2>
        <Button
          type="primary"
          ghost
          onClick={() => navigate("/add")}
          style={{
            color: "green", 
            borderColor: "green", 
            backgroundColor: "white",
          }}
        >
          Add Event
        </Button>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        className="bg-white rounded shadow"
      />
    </div>
  );
};

export default EventList;
