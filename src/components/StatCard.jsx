export function StatCard({ title, value, trend }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      {trend && <span className="trend">{trend}</span>}
    </div>
  );
}
