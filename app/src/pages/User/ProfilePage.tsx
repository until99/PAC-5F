import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="profile mt-24">
        <div className="flex flex-col items-center gap-12">
          <img
            className="w-64 rounded-full"
            src="https://i.pinimg.com/564x/de/b1/ef/deb1efa355b07cb89d043c81fb0bd4c0.jpg"
            alt="profile icon"
          />
          <div className="input-group flex flex-col gap-2">
            <label className="text-gray-700" htmlFor="profile-name">
              Nome
            </label>
            <input
              name="profile-name"
              type="text"
              className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none"
              value={"Gabriel"}
            />
          </div>

          <div className="input-group flex flex-col gap-2">
            <label className="text-gray-700" htmlFor="profile-name">
              Sobrenome
            </label>
            <input
              name="profile-name"
              type="text"
              className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none"
              value={"Kasten"}
            />
          </div>

          <div className="input-group flex flex-col gap-2">
            <label className="text-gray-700" htmlFor="profile-url-image">
              Profile Url Image
            </label>
            <input
              name="profile-url-image"
              type="text"
              className="rounded-3xl border-2 border-solid border-gray-200 px-4 py-2 text-base outline-none"
              value={
                "https://i.pinimg.com/564x/de/b1/ef/deb1efa355b07cb89d043c81fb0bd4c0.jpg"
              }
            />
          </div>
          <Link
            to={"/register"}
            className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md"
          >
            Atualizar
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
