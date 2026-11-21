import { Users, UserPlus, Phone, Trophy, XCircle } from "lucide-react";
import StatCard from "../components/StatCard";

function Dashboard({ leads }) {

  const total = leads.length;
  const newLeads = leads.filter(l => l.status === "NEW").length;
  const contacted = leads.filter(l => l.status === "CONTACTED").length;
  const qualified = leads.filter(l => l.status === "QUALIFIED").length;
  const lost = leads.filter(l => l.status === "LOST").length;

  return (
    <div className="dashboard">

      <div className="welcome-section">
        <h2>Welcome back! 👋</h2>
        <p>Here's what's happening with your leads today.</p>
      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Leads"
          count={total}
          icon={<Users />}
          color="blue"
        />

        <StatCard
          title="New Leads"
          count={newLeads}
          icon={<UserPlus />}
          color="purple"
        />

        <StatCard
          title="Contacted"
          count={contacted}
          icon={<Phone />}
          color="orange"
        />

        <StatCard
          title="Qualified"
          count={qualified}
          icon={<Trophy />}
          color="green"
        />

        <StatCard
          title="Lost"
          count={lost}
          icon={<XCircle />}
          color="red"
        />

      </div>

      <div className="dashboard-info">
        <h3>Lead Overview</h3>
        <p>You currently have {total} leads in your system.</p>
      </div>

    </div>
  );
}

export default Dashboard;