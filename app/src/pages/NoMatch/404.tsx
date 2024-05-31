import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <img
          className="h-full"
          src={"https://i.imgur.com/LJarnj1.png"}
          alt="teste"
        />
        <Link className="text-blue-800 underline" to="/">
          Go to the home page
        </Link>
      </div>
    </>
  );
}
