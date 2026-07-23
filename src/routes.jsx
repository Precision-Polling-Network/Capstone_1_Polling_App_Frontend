import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import CreatePoll from "./pages/CreatePoll";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";
import Results from "./pages/Results";

function AppRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll/:id" element={<Poll />} />
        <Route path="/poll/:id/results" element={<Results />} />
        <Route path="/CreatePoll" element={<CreatePoll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
