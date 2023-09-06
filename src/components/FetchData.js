import React, { useState } from 'react'

function FetchData() {
    const [data,setData] = useState([])
    const [sortData,setSortData] = useState(true)

    async function fetchData(){
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setData(data)
        console.log(data)
    }
    function handleSort(){
        
        let arr = [...data];
        if(sortData){
            arr.sort((a,b)=>{
                if(a.name>b.name){
                    return -1;
                }else{
                    return 1;
                }
            })
        }else{
            arr.sort((a,b)=>{
                if(a.name>b.name){
                    return 1;
                }else{
                    return -1;
                }
            })
            
            
        }
        setData(arr);
        setSortData(!sortData)
        
    }
  return (
    <div>
        <p>Fetch Data and sort by name</p>
      <button onClick={fetchData}>Fetch data</button>
      <button onClick={handleSort}>Sort</button>
      {data && 
        data.map((item)=>{
            return(
                <div key={item.id}>
                    <h5>{item.name}</h5>
                </div>
            )
        })
      }
    </div>
  )
}

export default FetchData
