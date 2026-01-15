import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIGenerator() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const generatePlan = async () => {
    if (!idea.trim()) return;

    setLoading(true);
    setError("");

    const API_URL = import.meta.env.DEV
      ? "http://localhost:5000/api/generate"
      : "/api/generate";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea })
      });

      if (!res.ok) throw new Error("AI failed");

      const data = await res.json();

      // ✅ SAVE FULL STARTUP DATA
      const startup = {
        idea,
        roadmap: data.roadmap,
        pitch: data.pitch,
        licenses: data.licenses || [],
        planner: data.planner || [],
        licenseStatus: (data.licenses || []).map(l => ({
          name: l,
          status: "In Process"
        }))
      };

      localStorage.setItem("startupData", JSON.stringify(startup));

      navigate("/dashboard");

    } catch (e) {
      console.error(e);
      setError("AI generation failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Describe your startup idea</h1>

      <textarea
        rows={4}
        value={idea}
        onChange={e => setIdea(e.target.value)}
        placeholder="Example: Food delivery app for hostels"
      />

      <br /><br />

      <button onClick={generatePlan} disabled={loading}>
        {loading ? "Generating..." : "Generate Startup Plan"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
