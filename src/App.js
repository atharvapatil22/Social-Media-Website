import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/register"} exact element={<Register />} />
          <Route path={"/login"} exact element={<Login />} />
          <Route path={"/upload"} exact element={<Upload />} />
          <Route path={"/profile"} exact element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
