import axios from "axios";
import React, { useState } from "react";
import "./Upload.css";

import { useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const navigate = useNavigate();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "social_media_react");

    axios
      .post("https://api.cloudinary.com/v1_1/dbanpvg0t/image/upload", formData)
      .then((response) => {
        const filename = response.data.public_id;

        axios
          .post("http://localhost:3001/upload", {
            title: title,
            description: description,
            image: filename,
            author: localStorage.getItem("username"),
          })
          .then((res) => {
            navigate("/");
          })
          .catch((e) => {});
      })
      .catch((err) => {});
  };

  return (
    <div className="upload">
      <h1>Create A Post</h1>
      <form className="upload-form">
        <input
          required
          type={"text"}
          placeholder="Title ..."
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          required
          type={"text"}
          placeholder="description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          required
          type="file"
          onChange={(e) => setImage(e.target.files)}
        />
        <button type="button" onClick={upload}>
          Post
        </button>
      </form>
    </div>
  );
}

export default Upload;
