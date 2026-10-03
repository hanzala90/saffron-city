"use client";

import { useState } from "react";

const plotTypes = [
  "5 Marla Residential",
  "8 Marla Residential",
  "10 Marla Residential",
  "1 Kanal Residential",
  "Commercial Plot",
];

const sectors = ["Sector A", "Sector B", "Any / Open to Options"];

const initialData = {
  name: "",
  phone: "",
  email: "",
  plotType: "",
  sector: "",
  message: "",
};

export default function PlotBookingForm() {
  const [form, setForm] = useState(initialData);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          number: form.phone,
          email: form.email,
          interested: `${form.plotType} — ${form.sector}`,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", message: data.message || "Submission failed. Please try again." });
        return;
      }

      setStatus({
        type: "success",
        message: "✅ Request received! Our advisor will contact you shortly.",
      });
      setForm(initialData);
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="plot-booking-form" onSubmit={onSubmit} aria-label="Book a plot in Saffron City">
      <div className="pbf-row">
        <div className="pbf-field">
          <label htmlFor="pbf-name">Full Name *</label>
          <input
            id="pbf-name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            value={form.name}
            onChange={update}
          />
        </div>
        <div className="pbf-field">
          <label htmlFor="pbf-phone">Phone / WhatsApp *</label>
          <input
            id="pbf-phone"
            name="phone"
            type="tel"
            placeholder="+92 3XX XXXXXXX"
            required
            value={form.phone}
            onChange={update}
          />
        </div>
      </div>

      <div className="pbf-row">
        <div className="pbf-field">
          <label htmlFor="pbf-plot">Plot Type *</label>
          <select id="pbf-plot" name="plotType" required value={form.plotType} onChange={update}>
            <option value="" disabled>Select plot size</option>
            {plotTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="pbf-field">
          <label htmlFor="pbf-sector">Preferred Sector</label>
          <select id="pbf-sector" name="sector" value={form.sector} onChange={update}>
            <option value="">Select sector</option>
            {sectors.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pbf-field">
        <label htmlFor="pbf-email">Email Address</label>
        <input
          id="pbf-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={update}
        />
      </div>

      <div className="pbf-field">
        <label htmlFor="pbf-message">Message / Budget (optional)</label>
        <textarea
          id="pbf-message"
          name="message"
          rows={3}
          placeholder="e.g. Looking for a corner plot, budget around PKR 50 lakh, prefer easy installments…"
          value={form.message}
          onChange={update}
        />
      </div>

      <button className="btn btn-primary pbf-submit" type="submit" disabled={loading}>
        {loading ? "Sending…" : "🏡 Check Availability & Book Plot"}
      </button>

      <p className="pbf-note">
        Or call us directly:{" "}
        <a href="tel:+923315408089" style={{ color: "var(--brand)", fontWeight: 700 }}>
          +92 331 5408089
        </a>{" "}
        ·{" "}
        <a
          href="https://wa.me/923315408089"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontWeight: 700 }}
        >
          WhatsApp
        </a>
      </p>

      {status.type !== "idle" && (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      )}
    </form>
  );
}
