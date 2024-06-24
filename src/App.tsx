import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";

import Event from "@/pages/events/Event";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Profile from "@/pages/profile/Profile";
import CreateEvent from "@/pages/events/CreateEvent";
import UpdateProfile from "@/pages/profile/UpdateProfile";
import Events from "./pages/events/Events";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      
      <Route path="event/:id" element={<Event />} />
      <Route path="events" element={<Events />} />
      <Route path="create-event" element={<CreateEvent />} />

      <Route path="profile/:id" element={<Profile />} />
      <Route path="profile/update/:id" element={<UpdateProfile />} />
      
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;