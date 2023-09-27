import { useState } from "react";

const DropDownSearch = ({arr})=>{
    const [text,setText] = useState("")

    return(
        <div>
            <input list="data" value={text} onChange={(e)=> setText(e.target.value)}/>
            <datalist id="data">
                {
                    text.length>=2 && 
                        arr.map((val,idx)=>{
                            return(
                                <option value={val} key={idx}>{val}</option>
                            )
                        })
                    
                }
            </datalist>
        </div>
    )
}
export default DropDownSearch;