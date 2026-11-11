import React, { useState } from "react";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section>
      <div className="section-head">
        <h2>Contact</h2>
        <p>Send a message, or reach out directly.</p>
      </div>
      <div className="contact-wrap">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} required />
          </div>
          <button className="btn btn-primary" type="submit">Send message</button>
          {sent && (
            <div className="sent-note">
              Thanks, {form.name || "friend"} — message noted (demo only, not actually sent).
            </div>
          )}
        </form>

        <div className="contact-info">
          <div className="info-card">
            <div className="k">Email</div>
            <div className="v">damiannealistair.pakkal@clsu2.edu.ph</div>
          </div>
          <div className="info-card">
            <div className="k">School</div>
            <div className="v">CLSU</div>
          </div>
          <div className="info-card">
            <div className="k">Org</div>
            <div className="v">BITS President</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
