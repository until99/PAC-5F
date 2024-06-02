import { Routes, Route } from "react-router-dom";

import NoMatch from "@/pages/NoMatch/404"; // 404
import Home from "@/pages/HomePage"; // Landing page

import Events from "@/pages/Events/EventListPage"; // events
import OrganizeEvents from "@/pages/Events/EventCreatePage"; // create event form
import EventDetails from "@/pages/Events/EventDetailPage"; // event detail by id
import RegisterPage from "./pages/Login&Register/RegisterPage";
import LoginPage from "./pages/Login&Register/loginPage";
import EventListGeneralPage from "./pages/Events/EventListGeneralPage";
import MyEventsPage from "./pages/User/MyEventsPage";
import ProfilePage from "./pages/User/ProfilePage";

// import MyEvents from "@/pages/Profile/MyEventsPage" // assign event list

export default function App() {
  return (
    <div className="app px-48 text-lg">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="events" element={<Events />} />
          <Route path="all-events" element={<EventListGeneralPage />} />

          <Route path="events/:id" element={<EventDetails />} />

          <Route path="organize" element={<OrganizeEvents />} />
          <Route path="all-events" element={<EventListGeneralPage />} />

          <Route path="user/my-events" element={<MyEventsPage />} />
          <Route path="user/profile" element={<ProfilePage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
