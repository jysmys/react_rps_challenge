import React, { useState } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import axios from "axios";

const FacebookLogin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleResponse = async (data) => {
    try {
      let userEmail = data.profile.email;
      const response = await axios.post("http://localhost:3000/api/v1/auth", {
        uid: data.profile.id,
        email: userEmail,
        provider: "facebook",
      });

      let tokenHeaders = {
        ...response.headers,
        ...response.data,
        email: userEmail,
      };
      sessionStorage.setItem(
        "J-tockAuth-Storage",
        JSON.stringify(tokenHeaders)
      );
      setAuthenticated(true);
      // here we are using local state
      // but perhaps you want to send it off to the redux store
      // if the user is authenticated
    } catch (error) {
      // other code, handle error message
    }
  };

  return (
    <>
      <FacebookProvider appId="your-fb-app-id-here">
        <LoginButton scope="email" onCompleted={handleResponse} id="facebook-login">
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
      {authenticated && (
        <p id="welcome-message">
          Welcome{" "}
          {JSON.parse(sessionStorage.getItem("J-tockAuth-Storage")).email}
        </p>
      )}
    </>
  );
};

export default FacebookLogin;
