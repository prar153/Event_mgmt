import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EventLayout from "./components/EventLayout"; // layout with sidebar
import EventList from "./components/EventList";
import Eventform from "./components/Eventform";
import EditEvent from "./components/EditEvent";

function App() {
  return (
      <Routes>
        <Route path="/" element={<EventLayout />}>
          <Route index element={<EventList />} />
          <Route path="add" element={<Eventform />} />
          <Route path="edit/:id" element={<EditEvent />} />
        </Route>
      </Routes>
  );
}

export default App;
