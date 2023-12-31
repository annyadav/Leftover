import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./uploadFood.css";
import axios from "axios";
import { useState } from "react";

export default function UploadFood() {
  const navigate = useNavigate(); // New change
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create form data
    const formData = new FormData();
    formData.append("image", image);
    formData.append("foodName", foodName);
    formData.append("expDate", expDate);
    formData.append("address", address);

    try {
      // Send data to backend
      console.log(formData);
      await axios.post("http://localhost:5000/uploadFood", formData);
      alert("Data uploaded successfully...");
      navigate("/availbleFood"); // New change
    } catch (error) {
      console.log("Erros is: ", error);
      alert("Some error happened in backend");
    }
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="uploadFood">
      <Navbar />
      <div className="uploadFoodContainer">
        <form
          id="imageForm"
          encType="multipart/form-data"
          className=" p-2 mt-2"
          onSubmit={handleSubmit}
        >
          <h2 className="m-2 text-center">
            Provide necessary information here...
          </h2>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              id="imageInput"
              name="image"
              placeholder="upload food image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryInfo">
              Expiration Date(please click on calander icon)
              <input
                type="date"
                className="form-control"
                id="expiryInfo"
                name="expiryInfo"
                onChange={(e) => setExpDate(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="foodName">Food Name</label>
            <input
              type="text"
              className="form-control"
              id="foodName"
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput">Enter your address</label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="submit-btn-container d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-success main-btn">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
