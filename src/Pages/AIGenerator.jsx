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

    try {
      const response = await fetch("/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
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

      {aiResponse && (
        <div style={{ marginTop: "40px" }}>
          <h3>AI Generated Preview</h3>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-wrap",
              marginTop: "10px"
            }}
          >
{JSON.stringify(aiResponse, null, 2)}
          </pre>

          <button
            onClick={() => navigate("/select", { state: aiResponse })}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              background: "#1a1a1a",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
