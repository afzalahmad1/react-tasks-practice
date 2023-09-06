import { useState } from "react";

const RadioButton = ()=>{
    const [game,setGame] = useState()
    const [day,setDay] = useState()
    const games = ["cricket","football","hockey"];
    const days = ["weekend","weekday"]
    return(
        <div>
            <p>Select radio button</p>
            <b>select games</b>
            {
                games.map((game,idx)=>{
                    return(
                        <div key={idx}>
                            <input type="radio" value={game} name="game" id={game} onChange={(e)=> setGame(e.target.value)}/>
                            <label htmlFor={game}>{game}</label>
                        </div>
                    )
                })
            }
            {game && <p>{game} is selected</p>}
                <b>select day</b>
            {
                days.map((day,idx)=>{
                    return(
                        <div key={idx}>
                            <input type="radio" value={day} name="day" id={day} onChange={(e)=> setDay(e.target.value)} />
                            <label htmlFor={day}>{day}</label>
                        </div>
                    )
                })
            }
            {day && <p>{day} is selected</p>}
        </div>
    )
}
export default RadioButton;