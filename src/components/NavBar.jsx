import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <NavLink to="/home">
                Home
            </NavLink>
            <br/>
            <NavLink to="/create">
                Create Poll
            </NavLink>
            <hr/>
        </nav>
        
    )
}