import { useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  source: "WEBSITE",
  status: "NEW",
};

function LeadForm({ onClose, onSubmit, initialData }) {
  const [form, setForm] = useState(() =>
    initialData
      ? {
          name: initialData.name || "",
          email: initialData.email || "",
          phone: initialData.phone || "",
          company: initialData.company || "",
          source: initialData.source || "WEBSITE",
          status: initialData.status || "NEW",
        }
      : { ...initialForm }
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    setError("");
  };

  // Validate form
  const validateForm = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      return "Name, email and phone are required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+()\- ]{7,20}$/;

    if (!phoneRegex.test(form.phone.trim())) {
      return "Please enter a valid phone number.";
    }

    return "";
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const cleanedForm = {
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
      };

      await onSubmit(cleanedForm);
      onClose();

    } catch (err) {
      const responseData = err.response?.data;

      const backendMessage =
        responseData?.email ||
        responseData?.name ||
        responseData?.phone ||
        responseData?.error;

      setError(
        backendMessage ||
        "Unable to save lead. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="lead-modal">

        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <h2>
              {initialData ? "Edit Lead" : "Add New Lead"}
            </h2>

            <p>
              {initialData
                ? "Update the lead information."
                : "Enter the details to create a new lead."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lead Form */}
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            maxLength={100}
            required
          />

          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
            maxLength={150}
            required
          />

          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />

          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Enter company name"
            maxLength={150}
          />

          <label htmlFor="source">Lead Source *</label>
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            required
          >
            <option value="WEBSITE">Website</option>
            <option value="REFERRAL">Referral</option>
            <option value="LINKEDIN">LinkedIn</option>
            <option value="SOCIAL_MEDIA">Social Media</option>
            <option value="COLD_CALL">Cold Call</option>
            <option value="OTHER">Other</option>
          </select>

          <label htmlFor="status">Lead Status *</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="QUALIFIED">Qualified</option>
            <option value="LOST">Lost</option>
          </select>

          {/* Error Message */}
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          {/* Form Actions */}
          <div className="modal-actions">

            <button
              type="button"
              onClick={onClose}
              className="cancel-btn"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : initialData
                  ? "Update Lead"
                  : "Save Lead"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default LeadForm;