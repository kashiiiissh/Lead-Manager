import { Bell, Search } from "lucide-react";

function Navbar({ title }) {
  return (
    <header className="navbar">
      <div>
        <h2>{title}</h2>
        <p>Manage and track your sales leads</p>
      </div>

      <div className="navbar-actions">
        <button className="icon-button" aria-label="Search">
          <Search size={19} />
        </button>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
        </button>

        <div className="navbar-avatar">K</div>
      </div>
    </header>
  );
}

export default Navbar;