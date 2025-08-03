import { Routes, Route } from "react-router-dom";
import EventLayout from "./events/EventLayout";
import EventList from "./events/EventList";
import EventForm from "./events/Eventform";
import Eventedit from "./events/Eventedit";


function App() {
  return (
    <Routes>
      <Route path="/" element={<EventLayout />}>
        <Route index element={<EventList />} />
        <Route path="add" element={<EventForm />} />
        <Route path="/edit/:id" element={<Eventedit/>} />
      </Route>
    </Routes>
  );
}

export default App;
