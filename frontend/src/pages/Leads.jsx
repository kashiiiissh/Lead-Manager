import { useState } from "react";
import { Search, Plus } from "lucide-react";

import LeadTable from "../components/LeadTable";
import LeadForm from "../components/LeadForm";

import {
  addLead,
  updateLead,
  deleteLead
} from "../services/leadService";

function Leads({ leads, refreshLeads }) {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  // Add or Update Lead
  const handleSubmit = async (form) => {
    if (editingLead) {
      await updateLead(editingLead.id, form);
    } else {
      await addLead(form);
    }

    await refreshLeads();
    setEditingLead(null);
  };

  // Edit Lead
  const handleEdit = (lead) => {
    setEditingLead(lead);
    setShowForm(true);
  };

  // Delete Lead
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    try {
      await deleteLead(id);
      await refreshLeads();
    } catch {
      alert("Unable to delete lead. Please try again.");
    }
  };

  // Search and Filter
  const filteredLeads = leads.filter((lead) => {

    const matchesName = lead.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "" || lead.status === status;

    return matchesName && matchesStatus;
  });

  return (
    <div className="leads-page">

      {/* Page Heading */}
      <div className="leads-heading">

        <div>
          <h2>All Leads</h2>
          <p>Manage and track all your potential customers.</p>
        </div>

        <button
          className="add-lead-button"
          onClick={() => {
            setEditingLead(null);
            setShowForm(true);
          }}
        >
          <Plus size={18} />
          Add New Lead
        </button>

      </div>

      {/* Search and Filter */}
      <div className="filter-section">

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="NEW">New</option>
          <option value="CONTACTED">Contacted</option>
          <option value="QUALIFIED">Qualified</option>
          <option value="LOST">Lost</option>
        </select>

      </div>

      {/* Leads Table */}
      <LeadTable
        leads={filteredLeads}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* Add and Edit Modal */}
      {showForm && (
        <LeadForm
          key={editingLead?.id ?? "new"}
          initialData={editingLead}
          onClose={() => {
            setShowForm(false);
            setEditingLead(null);
          }}
          onSubmit={handleSubmit}
        />
      )}

    </div>
  );
}

export default Leads;