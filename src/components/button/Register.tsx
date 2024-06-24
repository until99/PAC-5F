import { Link } from "react-router-dom";

export default function RegisterButton() {
  return (
    <Link to="signup">
      <button className="rounded-full bg-black px-8 py-3 font-bold text-white hover:shadow-md">
        Sign Up
      </button>
    </Link>
  );
}
