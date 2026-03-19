"use client";

import { useState } from "react";

const initialFormData = {
  name: "",
  number: "",
  email: "",
  interested: "",
  message: ""
};

export default function LeadForm({ className = "lead-form reveal delay-1" }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message || "Unable to submit right now. Please try again."
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Thanks. Your request has been submitted successfully."
      });
      setFormData(initialFormData);
    } catch (_error) {
      setStatus({
        type: "error",
        message: "Network issue detected. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={className} onSubmit={onSubmit} aria-label="Lead capture form">
      <label htmlFor="name">Full name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={updateField}
      />

      <label htmlFor="number">Phone number</label>
      <input
        id="number"
        name="number"
        type="tel"
        placeholder="03xx xxxxxxx"
        required
        value={formData.number}
        onChange={updateField}
      />

      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        value={formData.email}
        onChange={updateField}
      />

      <label htmlFor="interested">Interested in</label>
      <select
        id="interested"
        name="interested"
        required
        value={formData.interested}
        onChange={updateField}
      >
        <option value="" disabled>Select a category</option>
        <option value="Residential Plot">Residential Plot</option>
        <option value="Commercial Plot">Commercial Plot</option>
        <option value="Investment Consultation">Investment Consultation</option>
      </select>

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Tell us your budget range or preferred plot size"
        value={formData.message}
        onChange={updateField}
      />

      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request a Call Back"}
      </button>

      {status.type !== "idle" && (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      )}
    </form>
  );
}
