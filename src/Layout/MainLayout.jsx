import { Outlet, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <div>
      {/* NAVBAR */}
      <div
        style={{
          height: 65,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          borderBottom: "1px solid #eee",
          background: "white",
          position: "sticky",
          top: 0,
          zIndex: 100
        }}
      >
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          BabyShark 🚀
        </h2>

        <div style={{ display: "flex", gap: 15 }}>
          <button onClick={() => navigate("/explore")} style={btnStyle}>
            Explore
          </button>

          <button onClick={() => navigate("/dashboard")} style={btnStyle}>
            Dashboard
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <Outlet />
    </div>
  );
}

const btnStyle = {
  padding: "8px 14px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "#f8f8f8",
  cursor: "pointer",
  fontWeight: 500
};
