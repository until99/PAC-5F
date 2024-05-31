import { Routes, Route } from "react-router-dom";

import NoMatch from "@/pages/NoMatch/404"; // 404
import Home from "@/pages/HomePage"; // Landing page

import Events from "@/pages/Event/EventListPage"; // events
import OrganizeEvents from "@/pages/Event/EventCreatePage"; // create event form
import EventDetails from "@/pages/Event/EventDetailPage"; // event detail by id
import RegisterPage from "./pages/Login&Register/RegisterPage";

// import MyEvents from "@/pages/Profile/MyEventsPage" // assign event list

export default function App() {
  return (
    <div className="app px-48 py-8 text-lg">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="register" element={<RegisterPage />} />

          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetails />} />

          <Route path="organize" element={<OrganizeEvents />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
