import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }
    axios
      .post("http://localhost:3001/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res?.data) alert(res.data);
        console.log("Response: ", res);
      })
      .catch((err) => {
        if (err?.response?.data) alert(err.response.data);
        console.log("Error: ", err.response);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-form">
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
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
