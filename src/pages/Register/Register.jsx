import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    axios
      .post("http://localhost:3001/user/register", {
        username: username,
        password: password,
      })
      .then((res) => {
        alert(res.data.message);
        console.log("Response: ", res.data);
      })
      .catch((err) => {
        console.log("Error: ", err.response.data);
        alert(err?.response?.data?.message);
      });
  };

  return (
    <div className="register">
      <h1>Registeration</h1>
      <div className="register-form">
        <input
          required
          type={"text"}
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          required
          type={"password"}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;
