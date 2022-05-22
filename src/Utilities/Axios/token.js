import axios from "axios";

const token =async (email) => {
  const { data } =await axios.post("/login", {
    email: email,
  });
  console.log(data);
  localStorage.setItem("accessToken", data?.accessToken);
};

export default token;
