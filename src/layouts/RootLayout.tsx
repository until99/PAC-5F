import { Outlet } from "react-router-dom";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout() {
  return (
    <div className="mx-48 my-8">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
