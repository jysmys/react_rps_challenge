import axios from "axios";

const registration = async (name, email, password, password_confirmation) => {
  try {
    const response = await axios.post("/auth", {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation,
      },
    });
    // await storeAuthCredentials(response);
    console.log(response.data);
    return { authenticated: true, data: response.data };
  } catch (error) {
    return { authenticated: false, message: error.response.data.errors };
  }
};

const storeAuthCredentials = ({ headers }) => {
  const credentials = {
    uid: headers["uid"],
    client: headers["client"],
    access_token: headers["access-token"],
    expiry: headers["expiry"],
    token_type: "Bearer",
  };
  sessionStorage.setItem("credentials", JSON.stringify(credentials));
};

export { registration };
