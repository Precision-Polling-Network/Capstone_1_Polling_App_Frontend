import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePoll from "./pages/CreatePoll";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Poll from "./pages/Poll";
import Results from "./pages/Results";
import ProtectedRoute from "./components/ProtectedRoute";


function AppRoutes() {
  const token = localStorage.getItem("loginToken");

  return (
    <>
      {token && <NavBar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
              <Home />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/poll/:id"
          element={
            <ProtectedRoute>
              <><Poll /></>
            </ProtectedRoute>
          }
        />

        <Route
          path="/poll/:id/results"
          element={
            <ProtectedRoute>
              <><Results /></>
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute><>
              <CreatePoll /></>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
