import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <br/>
            <NavLink to="/CreatePoll">
                Create Poll
            </NavLink>
            <hr/>
        </nav>
        
    )
}