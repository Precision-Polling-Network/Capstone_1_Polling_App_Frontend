import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";
import Results from "./pages/Results";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/polls/:id" element={<Poll />} />
        <Route path="/polls/:id/results" element={<Results />} />
        <Route path="/create" element={<ProtectedRoute><CreatePoll /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
