import * as React from "react";
import { Link } from "react-router-dom";
import useUser from "../_hooks/useUser";

export default function UserInfo() {
  const { isLoggedIn, userState } = useUser();
  return isLoggedIn() ? (
    <div>
      You're on the user info page and your email is <b>{userState.email}</b>.
      If you see this, that means you have succesfully logged in! Alternatively
      you can <Link to="/logout">sign out.</Link>
    </div>
  ) : (
    <div>
      Insuffiecent permissions, please sign in <Link to="/signin">here</Link>
    </div>
  );
}
