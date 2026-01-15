import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>Your Startup Workspace</h1>

      <div style={{ display: "grid", gap: 15, marginTop: 20 }}>
        <button onClick={() => navigate("/roadmap")}>🧭 Roadmap</button>
        <button onClick={() => navigate("/pitch")}>🎤 Pitch</button>
        <button onClick={() => navigate("/licenses")}>📄 Licenses</button>
        <button onClick={() => navigate("/progress")}>📈 Progress</button>
        <button onClick={() => navigate("/planner")}>🗓 Planner</button>
      </div>
    </div>
  );
}
