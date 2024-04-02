import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css";
// import Pop from "./Pop";
const Mock = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  };

  const handleSubmit = () => {
    if (!name || !age || !value) {
      if (!name) {
        alert("Enter name");
      } else if (!age) {
        alert("enter Age");
      } else if (!value) {
        alert("select country");
      }
      return;
    }
    navigate("/thankyou")
    // setModal(true);
  };
  return (
    <div className="form-flex">
      {modal ? (
        // <Pop />
        <div>Pop</div>
      ) : (
        <div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <select onChange={(e) => setValue(e.target.value)}>
            <option value="">Select country</option>
            {countries.map((item, idx) => {
              return (
                <option key={idx} value={item.name.common}>
                  {item.name.common}
                </option>
              );
            })}
          </select>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mock;
