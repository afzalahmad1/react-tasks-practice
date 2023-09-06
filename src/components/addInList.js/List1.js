// This challenge is perhaps the most commonly asked React coding challenge for mid-level React developers.

// In this challenge, the developer has to create an input field with a button.

// When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list
//  item is clicked, it should be removed from the list.

// The motive of this challenge is to check how good the developer is with forms, state, and lists.

// First, create the functionality to add the text written in the input field to the list.

import React, { useState } from "react";

function List1() {
  const [listVal, setListVal] = useState([]);
  const [item, setItem] = useState("");
  const handleAdd = () => {
    setListVal([...listVal, item]);
    setItem("");
    console.log(listVal);
  };
  const handleDelete = (val) => {
    const list = listVal.filter((item) => {
      return item !== val;
    });
    setListVal(list);
  };
  return (
    <div>
      <p>Add List</p>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {listVal &&
          listVal.map((val, idx) => {
            return (
              <div key={idx}>
                <span style={{margin:"20px"}}>
                  {idx + 1}.{val}
                </span>
                <button onClick={() => handleDelete(val)}>DETETE</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List1;
