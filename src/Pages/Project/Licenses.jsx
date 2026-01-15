export default function Licenses() {
  const data = JSON.parse(localStorage.getItem("startupData"));

  return (
    <div style={{ padding: 40 }}>
      <h2>License Tracking</h2>

      {data?.licenseStatus?.map((l, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <b>{l.name}</b> — Status: {l.status}
        </div>
      ))}
    </div>
  );
}
