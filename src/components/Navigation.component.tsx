import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider.component";
import { signOutWithAuth } from "../utils/firebase.utils";

export default function Navigation() {
  const [currentUser, setCurrentUser] = useContext(UserContext)!;

  return (
    <header className="h-20 shadow-md flex justify-start items-center px-4">
      <ul className="flex flex-row gap-4">
        <li className="hover:text-pink-500 cursor-pointer bg-red-400"></li>
        <li className="hover:text-pink-500 cursor-pointer">
          <Link to="/">home</Link>
        </li>
        <li className="hover:text-pink-500 cursor-pointer">
          <Link to="/shop">shop</Link>
        </li>
        <li className="hover:text-pink-500 cursor-pointer">
          <Link to="/about">about</Link>
        </li>
      </ul>

      <div className="ml-auto">
        {currentUser ? (
          <button
            onClick={() => {
              signOutWithAuth();
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link to="sign" className="hover:text-blue-500">
            Sign In{" "}
          </Link>
        )}
      </div>
    </header>
  );
}
