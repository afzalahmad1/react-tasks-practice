import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Mock = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchNames();
  },[]);

  const fetchNames = () => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  };

  const validate = ()=>{
    // console.log(value);
    if(!name || !age){
        alert("all fields are neccessory")
        return;
    }
    if(value !==""){
        navigate("/thankyou")
        return
    }else{
        alert("select country")
        return
    }

  }
  return (
    <div className="card-flex">
      <div className="flex">
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
        </div>
        {/* <label>Select Country:</label> */}
        <select onChange={(e)=>setValue(e.target.value)}>
          {countries && countries.map((item, idx) => {
            return idx===0? <option>select countries</option>:<option key={idx} value={item.name.common} >{item.name.common}</option>;
          })}
        </select>

        <div>
          <button onClick={validate}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default Mock;
