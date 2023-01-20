import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function PostView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://insta-clone-9ebm.onrender.com/user";
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setData(response.reverse()));
  }, []);
  const baseUrl = "https://insta-clone-9ebm.onrender.com/";
  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar-left">
            <div>
              <img src="target.jpg" alt="No logo" />
            </div>
            <div className="instaclone">Instaclone</div>
          </div>
          <div className="camera">
            <Link to="/InputData">
              <img src="camera-icon.jpg" alt="No logo" />
            </Link>
          </div>
        </div>
        {data.map((key) => (
          <>
          {/* {console.log(key.image)} */}
            <div className="container" key={key._id}>
              <div className="header">
                <div className="left-content">
                  <div id="name">{key.name}</div>
                  <div id="location">{key.location}</div>
                </div>
                <div className="dots">
                  <img src="dots.png" alt="no logo" />
                </div>
              </div>
              <div className="photos">
                <img src={`${baseUrl}${key.image}`} alt="no-photos" />
              </div>
              <div className="heart">
                <div>
                  <img src="heart-icon.png" alt="no-icon" />
                  <img src="rocket-icon.png" alt="no-icon" />
                </div>
                <div className="date">{key.date}</div>
              </div>
              <div className="likes">{key.likes} likes</div>
              <div className="description">{key.description}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
export default PostView;
