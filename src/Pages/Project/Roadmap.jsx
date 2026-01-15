export default function Roadmap() {
  const data = JSON.parse(localStorage.getItem("startupData"));

  return (
    <div style={{ padding: 40 }}>
      <h2>Execution Roadmap</h2>

      {data?.roadmap?.map((s, i) => (
        <div key={i}>
          <b>{s.title}</b>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}
