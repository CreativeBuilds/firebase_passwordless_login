import * as React from "react";
import rxUser from "../helpers/rxUser";

/**
 * The reason we say "use User" is because React hooks always
 * start with the word "use" as we are "using" the "user" object from firebase.
 */
export default function useUser() {
  const [userState, setUserState] = React.useState<firebase.User>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const $user = rxUser.subscribe((user) => {
      setUserState(user);
      setLoaded(true);
    });
    return () => {
      $user.unsubscribe();
    };
  }, []);

  const isLoggedIn = () => {
    return loaded && userState !== null;
  };

  return { userState, loaded, isLoggedIn };
}
