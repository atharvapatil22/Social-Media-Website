import axios from "axios";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("loggedIn")))
      localStorage.setItem("loggedIn", false);
  }, []);

  return <div>Home</div>;
}

export default Home;
