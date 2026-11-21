import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  Menu,
  X
} from "lucide-react";

function Sidebar({ activePage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-toggle ${isOpen ? "menu-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation"
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

        {/* Brand */}
        <div className="sidebar-brand">
          <div className="brand-icon">
            <BriefcaseBusiness size={22} />
          </div>
          <h2>LeadFlow</h2>
        </div>

        <p className="sidebar-label">MENU</p>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <button
            className={
              activePage === "dashboard"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => handleNavigate("dashboard")}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </button>

          <button
            className={
              activePage === "leads"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => handleNavigate("leads")}
          >
            <Users size={19} />
            <span>All Leads</span>
          </button>

        </nav>

        {/* Profile */}
        <div className="sidebar-bottom">
          <div className="profile">
            <div className="profile-avatar">K</div>

            <div>
              <strong>Admin User</strong>
              <span>Administrator</span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;