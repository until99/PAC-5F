import { Link } from "react-router-dom";
import BackgroundImage from "@/assets/PageNotFound.png";

export default function NoMatch() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <img className="h-1/2 w-1/2" src={BackgroundImage} alt="teste" />
        <Link
          className="rounded-lg border border-black p-4 outline-none"
          to="/"
        >
          Go to the home page
        </Link>
      </div>
    </>
  );
}
