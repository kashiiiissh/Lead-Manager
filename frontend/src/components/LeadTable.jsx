import { Pencil, Trash2 } from "lucide-react";

function LeadTable({ leads, onEdit, onDelete }) {

  const getStatusClass = (status) => {
    return status.toLowerCase();
  };

  return (
    <div className="table-container">
      <table className="leads-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Source</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-message">
                No leads found.
              </td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.company || "-"}</td>
                <td>{lead.source?.replace("_", " ")}</td>

                <td>
                  <span className={`status-badge ${getStatusClass(lead.status)}`}>
                    {lead.status}
                  </span>
                </td>

                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-button"
                      onClick={() => onEdit(lead)}
                      aria-label="Edit lead"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => onDelete(lead.id)}
                      aria-label="Delete lead"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;