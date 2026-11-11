import { useState } from "react";
import { PROFILE } from "../data";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pakkaldamianne146@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...Object.fromEntries(formData.entries()),
          _subject: `Portfolio message from ${form.name}`,
          _template: "table",
        }),
      });
      const result = await response.json();

      if (!response.ok || (result.success !== "true" && result.success !== true)) {
        throw new Error(result.message || "The email service did not accept the message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <section>
      <div className="section-head">
        <h2>Contact</h2>
        <p>Let’s connect for opportunities, projects, or collaborations.</p>
      </div>
      <div className="contact-wrap">
        <form onSubmit={handleSubmit}>
          <input className="honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
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
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <div className="sent-note" role="status">
              Thanks for reaching out. Your message has been sent.
            </div>
          )}
          {status === "error" && (
            <div className="error-note" role="alert">
              Your message could not be sent. Please try again or email me directly at{" "}
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>.
            </div>
          )}
        </form>

        <div className="contact-info">
          <div className="info-card">
            <div className="k">Name</div>
            <div className="v">{PROFILE.name}</div>
          </div>
          <div className="info-card">
            <div className="k">Email</div>
            <div className="v">{PROFILE.email}</div>
          </div>
          <div className="info-card">
            <div className="k">Phone</div>
            <div className="v">{PROFILE.phone}</div>
          </div>
          <div className="info-card">
            <div className="k">Address</div>
            <div className="v">{PROFILE.address}</div>
          </div>
          <div className="info-card">
            <div className="k">Current focus</div>
            <div className="v">{PROFILE.focus}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
