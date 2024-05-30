import { Routes, Route, Outlet, Link } from "react-router-dom";

// 404
import NoMatch from "@/pages/NoMatch/404";

// homepage
import Home from "./layout/Navbar";

// events
import Events from "@/pages/Event/EventListPage";
import OrganizeEvents from "@/pages/Event/EventCreatePage";
import EventDetails from "@/pages/Event/EventDetailPage";

export default function App() {
  return (
    <div className="app px-12 py-8">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="organize" element={<OrganizeEvents />} />
          <Route path="*" element={<NoMatch />} />

          <Route path="/events/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
