import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIGenerator() {
  const navigate = useNavigate();

  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  const [error, setError] = useState("");

  const generatePlan = async () => {
    if (!idea.trim()) {
      setError("Please enter a startup idea");
      return;
    }

    setLoading(true);
    setError("");

    
    const API_URL = import.meta.env.DEV
      ? "http://localhost:5000/api/generate" // localhost backend
      : "/api/generate";                     // vercel serverless

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idea })
      });

      if (!response.ok) {
        throw new Error("Failed to generate plan");
      }

      const data = await response.json();
      setAiResponse(data);

    } catch (err) {
      console.error(err);
      setError("AI generation failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Startup Idea Planner
      </h1>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Enter your startup idea and get a roadmap & pitch instantly.
      </p>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Example: Momo stall near college"
        rows={4}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
      )}

      <button
        onClick={generatePlan}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "black",
          color: "white",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer"
        }}
      >
        {loading ? "Generating..." : "Generate Plan"}
      </button>

      {/* ✅ Success Message Instead of Preview */}
      {aiResponse && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h2 style={{ color: "#22c55e" }}>
            🎉 Your startup is starting!
          </h2>

          <p style={{ marginTop: "10px", color: "#777" }}>
            Your roadmap and pitch are ready.
          </p>

          <button
            onClick={() => navigate("/select", { state: aiResponse })}
            style={{
              marginTop: "25px",
              padding: "12px 28px",
              background: "#22c55e",
              color: "black",
              fontWeight: "bold",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Let’s Go 🚀
          </button>
        </div>
      )}
    </div>
  );
}
