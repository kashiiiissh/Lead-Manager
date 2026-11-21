function StatCard({ title, count, icon, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default StatCard;