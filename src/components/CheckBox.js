import { useState } from "react";

const CheckBox = () => {
  const arr = ["paly cricket", "play football", "play hockey"];
  const [game, setGame] = useState([...arr]);
  const [check, setCheck] = useState();
  const handleDelete = (idx) => {
    console.log(game);
    let newArr = [...game];
    newArr.splice(idx, 1);
    setGame(newArr);
  };
  const handleCheckbox = (val,idx) => {
    console.log(idx);
    setCheck(idx);
  };
  return (
    <>
    <p>checked and delete</p>
      <ul>
        {game.map((val, idx) => {
          return (
            <div key={idx}>
              <li>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckbox(e.target.value,idx)}
                />
                {val}
                {(check===idx) ? (
                  <span
                    onClick={() => handleDelete(idx)}
                    style={{ color: "red" }}
                  >
                    X
                  </span>
                ) : (
                  ""
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default CheckBox;
