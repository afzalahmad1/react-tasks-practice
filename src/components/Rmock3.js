import { queryByLabelText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
// search from array
const Rmock3 = () => {
    let arr = ["Apple","Banana","Cherry","Orange","Elderberry"]
    let [orgArr,setOrgArr] = useState(arr);
    let [search,setSearch] = useState("");
    let [filteredArr,setFilteredArr] = useState([]);
    useEffect(()=>{
        console.log("org",orgArr);
        if(search){
            let newArr = orgArr.filter((val)=>{
                return val.toLowerCase().includes(search.toLowerCase())
            })
            console.log(newArr);
            setFilteredArr(newArr)
        }else{
            setFilteredArr([])
        }
        
    },[search])
    const handleSearchInput = (e)=>{
        setSearch(e.target.value)
    }
    
  return (
    <div>
      <div>
        <input type='text' onChange={handleSearchInput}/>
      </div>
      <div>
        
        {
            
            filteredArr.length>0 ? filteredArr.map((val,idx)=>{
                return(
                    <li key={idx}>{val}</li>
                )
            })
            :
            orgArr.map((val,idx)=>{
                return(
                    <li key={idx}>{val}</li>
                )
            })
        }
      </div>
    </div>
  )
}

export default Rmock3
