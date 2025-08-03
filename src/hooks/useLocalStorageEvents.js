import { useEffect, useState } from "react";

const useLocalStorageEvents = () => {
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  };

  const getEventById = (id) => {
    return events.find((event) => event.id === Number(id));
  };

  return { events, addEvent, deleteEvent, updateEvent, getEventById };
};

export default useLocalStorageEvents;
