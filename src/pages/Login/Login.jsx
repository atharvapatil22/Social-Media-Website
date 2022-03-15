import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

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
        console.log("Response: ", res.data);
        if (res.data.loggedIn) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", res.data.username);
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err?.response?.data) setErrMsg(err.response.data.message);
        console.log("Error: ", err);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={login}>
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
        <button type="button" onClick={login}>
          Login
        </button>
        {!!errMsg && <h3 style={{ color: "red" }}>{errMsg}</h3>}
      </form>
    </div>
  );
}

export default Login;
