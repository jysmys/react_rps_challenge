import axios from "axios";

const saveResult = async () => {
  // let win = winner === "Player" ? 1 : 0
  let headers = sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  try {
    await axios.post("/auth/sign_in", 
      { 
        nr_win: win
      }, {
        headers: headers
      }
    );
    // entryHandler();
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

export { saveData };