import { useEffect, useState, useCallback } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

import { getLeads } from "./services/leadService";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Refresh leads from backend
  const refreshLeads = useCallback(async () => {
    try {
      const data = await getLeads();
      setLeads(data);
      setError("");
    } catch {
      setError("Unable to load leads. Check backend connection.");
    }
  }, []);

  // Initial data loading
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await getLeads();
        setLeads(data);
      } catch {
        setError("Unable to load leads. Check backend connection.");
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const pageTitle =
    activePage === "dashboard" ? "Dashboard" : "All Leads";

  return (
    <div className="app-layout">

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="main-content">

        <Navbar title={pageTitle} />

        <div className="page-content">

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : activePage === "dashboard" ? (
            <Dashboard leads={leads} />
          ) : (
            <Leads
              leads={leads}
              refreshLeads={refreshLeads}
            />
          )}

        </div>
      </main>
    </div>
  );
}

export default App;