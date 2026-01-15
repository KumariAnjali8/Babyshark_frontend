export default function Planner() {
  const data = JSON.parse(localStorage.getItem("startupData"));

  return (
    <div style={{ padding: 40 }}>
      <h2>Startup Planner</h2>

      <ul>
        {data?.planner?.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
