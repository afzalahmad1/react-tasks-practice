import { queryByLabelText } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
// search from array
const Rmock3 = () => {
    let arr = ["Apple","Banana","Cherry","Orange","Elderberry"]
    let [orgArr,setOrgArr] = useState(arr);
    let [search,setSearch] = useState("");

    useEffect(()=>{
        console.log("org",orgArr);
        if(search){
            let newArr = orgArr.filter((val)=>{
                return val.toLowerCase().includes(search.toLowerCase())
            })
            // console.log(newArr);
            setOrgArr(newArr)
        }else{
            setOrgArr(arr)
        }
        
    },[search])
    const handleSearchInput = (e)=>{
        setSearch(e.target.value)
    }
    
  return (
    <div>
    <h1>Demo Search</h1>
      <div>
        <input type='text' onChange={handleSearchInput}/>
      </div>
      <div>
        
        {
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
