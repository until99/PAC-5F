import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="login">
      <button className="rounded-full px-8 py-3 hover:bg-slate-100">
        Log In
      </button>
    </Link>
  );
}
