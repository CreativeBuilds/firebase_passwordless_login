import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";

export default function Home() {
  // import just the isLoggedIn function to check whether or not the user is logged in
  const { isLoggedIn } = useUser();

  return !isLoggedIn() ? (
    <div>
      You are not currently signed in <Link to="/signin">Sign in here</Link>
    </div>
  ) : (
    <div>
      You are signed in! Check out your <Link to="/user">user page</Link>
    </div>
  );
}
