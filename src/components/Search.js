import { useState } from "react"

const Search= ({list})=>{
    
    const [name,setName] = useState("");
    const [filteredName,setFilteredName] = useState([])


    function searhHandle(e){
        setName(e.target.value);
        if(e.target.value===""){
            setFilteredName([])
            return;
        }
        setFilteredName([]);
        const nameList =list.filter((val)=>{
            return val.toLowerCase().includes(name.toLocaleLowerCase())
        })

        setFilteredName(nameList);

    }

    return(
        <div>
            <p>Search and filter by name</p>
            <input  type="text"  value={name} onChange={(e)=> searhHandle(e)}/>
            <ol className="list-flex">
            {
            filteredName.map((val,idx)=>{
                return(
                    <li key={idx}>
                    {val}
                    </li>
                )
            })
        }
        </ol>
        </div>
        
    )
}
export default Search;