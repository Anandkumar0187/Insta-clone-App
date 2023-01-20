import { React, useState } from "react";
import axios from 'axios';
import "../src/App.css";
import { Link } from "react-router-dom";

function InputData() {
  const[file_path, setFilePath] = useState("");
  const [form, setForm] = useState({});
  function handleClick(event) {
      event.preventDefault()
      event.target.nextElementSibling.click();
  };
  const handleChange = (event)=>{
    event.preventDefault();
        setFilePath(event.target.files[0])
        setForm({...form, image: event.target.files[0]})
  }

  const submitData = () => {
    const url = "https://insta-clone-9ebm.onrender.com/add";
    const formData = new FormData();
    formData.append('image', form.image);
        formData.append('name', form.name);
        formData.append('location', form.location);
        formData.append('description', form.description);
        formData.append('date', new Date());
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
  }
    axios.post(url,formData,config).then((response)=>console.log(response)).then((err)=>{
        console.log(err);
    })
  };
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
        <form onSubmit={submitData} className="form-data">
          <div className="first-data">
          <input type="text" value={file_path.name} placeholder="No files choosen"></input>
          <button id="file" onClick={handleClick}>Browse</button>
          <input type="file" name="file-upload" id="hide" onChange={handleChange} style={{display:"none"}}></input>
          </div>
          <div className="middle-data">
          <input
          className="author"
            name="name"
            type="text"
            placeholder="Author"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
          className="location"
            name="location"
            type="text"
            placeholder="Location"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          </div>  
          <div className="desc">
          <input
          className="descript"
            name="description"
            type="text"
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <Link to="/postview">
            <button type="submit" className="submit-btn" onClick={submitData}>
              Post
            </button>
          </Link>
          </div>
          
        </form>
      </div>
    </>
  );
}
export default InputData;
