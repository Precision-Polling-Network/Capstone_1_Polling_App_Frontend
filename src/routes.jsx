import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";
import Results from "./pages/Results";

function AppRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/poll/:id" element={<Poll />} />
        <Route path="/poll/:id/results" element={<Results />} />
        <Route path="/CreatePoll" element={<CreatePoll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
