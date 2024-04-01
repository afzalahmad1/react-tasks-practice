import {  NavLink } from "react-router-dom";

const Navigations = ()=>{
    return(
        <div className="navbar">
            <NavLink to="/">ImageUpload</NavLink>
            <NavLink to="/filtername">FilterArr</NavLink>
            <NavLink to="/list">List1</NavLink>
            <NavLink to="/radio">RadioButton</NavLink>
            <NavLink to="/fetch">FetchData</NavLink>
            <NavLink to="/dropdown">DropDown</NavLink>
            <NavLink to="/covid19">Covid</NavLink>
            <NavLink to="/checkbox">Checkbox</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/timer">Timer</NavLink>
            <NavLink to="/timer3">Timer3</NavLink>
            <NavLink to="/drop">Dropsearch</NavLink>
            <NavLink to="/card">Card</NavLink>
        </div>
    )
}
export default Navigations;    