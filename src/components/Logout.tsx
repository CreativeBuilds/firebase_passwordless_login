import * as React from "react";
import { auth } from "../firebase";

export default function Logout() {
  React.useEffect(() => {
    window.localStorage.clear();
    auth.signOut();
  }, []);

  return <div>Logging out...</div>;
}
