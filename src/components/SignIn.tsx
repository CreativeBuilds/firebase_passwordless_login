import * as React from "react";
import { auth, google } from "../firebase";

export default function SignIn() {
  // Will try to use previously entered email, defaults to an empty string
  const [email, setEmail] = React.useState(
    window.localStorage.getItem("emailForSignIn") || ""
  );
  const [errorResponse, setErrorResponse] = React.useState("");

  // When this component renders
  React.useEffect(() => {
    // Get the saved email
    const saved_email = window.localStorage.getItem("emailForSignIn");

    // Verify the user went through an email link and the saved email is not null
    if (auth.isSignInWithEmailLink(window.location.href) && !!saved_email) {
      // Sign the user in
      auth.signInWithEmailLink(saved_email, window.location.href);
    }
  }, []);

  const clearError = () => {
    if (errorResponse != "") {
      setErrorResponse("");
    }
  };

  /**
   * The React.ChangeEvent<HTMLInputElement> is from typescript and just shows
   * what value is getting passed in, so you dont have to remember
   * in this case its a "ChangeEvent" coming from "onChange"
   */
  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearError();
    setEmail(e.target.value);
  };

  const trySignIn = async () => {
    // If the user is re-entering their email address but already has a code
    if (auth.isSignInWithEmailLink(window.location.href) && !!email) {
      // Sign the user in
      auth.signInWithEmailLink(email, window.location.href).catch((err) => {
        switch (err.code) {
          default:
            setErrorResponse("An unknown error has occured");
        }
      });
    } else {
      auth
        .sendSignInLinkToEmail(email, {
          url: "http://localhost:1234/signin",
          handleCodeInApp: true,
        })
        .then(() => {
          // Save the users email to verify it after they access their email
          window.localStorage.setItem("emailForSignIn", email);
        })
        .catch((err) => {
          switch (err.code) {
            default:
              setErrorResponse("An unknown error has occured");
          }
        });
    }
  };

  return (
    <div className="sign_in">
      <span>Email:</span>
      <input type="text" value={email} onChange={updateEmail} />
      <div className="error_response">{errorResponse}</div>
      <button onClick={trySignIn}>Sign in</button>
    </div>
  );
}
