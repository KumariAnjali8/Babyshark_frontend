export default function Pitch() {
  const data = JSON.parse(localStorage.getItem("startupData"));

  return (
    <div style={{ padding: 40 }}>
      <h2>Written Pitch</h2>

      <p>{data?.pitch?.long}</p>

      <h3>Video Pitch</h3>
      <input type="file" />
    </div>
  );
}
