import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    // alert(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <p>Choose Image and Display</p>
      <br />
      <input type="file" onChange={handleImageChange} />
      <br />
      <br />
      {image && <img src={image} alt="uploaded" width="400" />}
    </div>
  );
};

export default ImageUpload;
