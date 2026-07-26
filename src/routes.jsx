import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useState } from 'react'
import NavBar from "./components/NavBar";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";
import Results from "./pages/Results";


function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);//usestate for the login. to check
                                                      // if the user login or not.
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> // set up the states and use it in the routes.
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} /> // pass promp in the route of the login path.
                                                                                // then pass to the NavBar and login functions.
        <Route path="/home" element={<Home />} />
        <Route path="/poll/:id" element={<Poll />} />
        <Route path="/poll/:id/results" element={<Results />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
