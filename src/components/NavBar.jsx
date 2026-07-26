import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/NavBar.css';


function NavBar({isLoggedIn, setIsLoggedIn}) { // catching the promps.
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Main logo links home without active styling */}
        <Link to="/home" className="nav-logo" onClick={closeMenu}>
         POLLar Opposites
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="nav-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn && (<li className="nav-item"> 
            <NavLink 
              to="/create" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Create Poll
            </NavLink>
          </li>
          )}
          { isLoggedIn && <li className="nav-item">
            <NavLink 
              to="/share" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={closeMenu}
            >
              Share
            </NavLink>
          </li>}
          <li className="nav-item">
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "nav-link nav-cta" : "nav-link nav-cta"}
              onClick={closeMenu}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// import { NavLink } from "react-router-dom";

// export default function NavBar(){
//     return(
//         <nav>
//             <NavLink to="/">
//                 Home
//             </NavLink>
//             <br/>
//             <NavLink to="/CreatePoll">
//                 Create Poll
//             </NavLink>
//             <hr/>
//         </nav>
        
//     )
// }