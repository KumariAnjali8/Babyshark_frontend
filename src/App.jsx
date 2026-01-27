import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AIGenerator from "./Pages/AIGenerator";
import Dashboard from "./Pages/Dashboard";

import Roadmap from "./Pages/Project/Roadmap";
import Pitch from "./Pages/Project/Pitch";
import Licenses from "./Pages/Project/Licenses";
import Progress from "./Pages/Project/Progress";
import Planner from "./Pages/Project/Planner";
import Explore from "./Pages/Explore";
import FeasibilityCheck from "./Pages/FeasibilityCheck";
import Workspace from "./Pages/Workspace";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route path="/" element={
          <ProtectedRoute>
            <FeasibilityCheck />
          </ProtectedRoute>
        } />

        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/ai" element={<ProtectedRoute><AIGenerator /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
        <Route path="/pitch" element={<ProtectedRoute><Pitch /></ProtectedRoute>} />
        <Route path="/licenses" element={<ProtectedRoute><Licenses /></ProtectedRoute>} />
        <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
        <Route path="/planner" element={<ProtectedRoute><Planner /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/workspace" element={<ProtectedRoute><Workspace /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
