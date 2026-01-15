export default function Progress() {
  const data = JSON.parse(localStorage.getItem("startupData"));

  return (
    <div style={{ padding: 40 }}>
      <h2>Startup Progress</h2>

      <p>✔ Idea Generated</p>
      <p>✔ Roadmap Created</p>
      <p>⏳ Licenses In Process: {data?.licenses?.length}</p>
      <p>⏳ Execution Started</p>
    </div>
  );
}
