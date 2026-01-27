import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.message);
    navigate("/login");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} /><br/>
        <button>Register</button>
      </form>
    </div>
  );
}
