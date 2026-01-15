import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>What brings you here today?</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <button onClick={() => navigate("/ai")}>
          🚀 I have an idea (Founder)
        </button>

        <button disabled>
          💰 I want to invest
        </button>

        <button disabled>
          🤝 I want to work
        </button>
      </div>
    </div>
  );
}
