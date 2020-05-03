import axios from "axios";

// const saveData = async (result) => {
//   let headers = sessionStorage.getItem("credentials");
//   headers = JSON.parse(headers);
//   headers = {
//     ...headers,
//     "Content-type": "application/json",
//     Accept: "application/json",
//   };
//   try {
//     await axios.post(
//       "/scores",
//       {},
//       {
//         headers: headers,
//       }
//     );
//     // entryHandler();
//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong");
//   }
// };
const getData = async () => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };

  const response = await axios.get("/scores", {
    headers: headers,
  });
  return response;
};

// export { getData, saveData };
export { getData };
