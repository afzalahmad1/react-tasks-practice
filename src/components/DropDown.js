import { useState } from "react";

const DropDown = ({list,list2})=>{
    const [value,setValue]=useState("");
    const [age,setAge]=useState();
    function handleChange(e){
        setValue(e.target.value)
    }
    return(
        <div>
            <p>DropDown and select</p>
            <span>Name: </span>
            <select onChange={(e)=>handleChange(e)}>
            {
                list.map((val,idx)=>{
                    return <option key={idx} value={val} >{val}</option>
                })
            }
            </select>
            {value ? ( <select onChange={(e)=> setAge(e.target.value)}> 
                {
                    list2.map((val2,idx)=>{
                        return (
                            
                            <option key={idx}>{val2}</option>
                        
                        )
                    })
                }
                </select>)
                : ""
                }

                {value && <h2>Name: {value}</h2>}
                {age && <h2>Age: {age}</h2>}
        </div>
    )
}
export default DropDown;