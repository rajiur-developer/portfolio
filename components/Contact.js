"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaEnvelope, FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWhatsapp, FaComments, FaTimes } from "react-icons/fa";
import Reveal from "./Reveal";

const EMAIL = "rajiurrahman21@gmail.com";
const PHONE = "+8801752892755";
const MESSENGER_URL = "https://m.me/mr.rj250530";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [messageMenuOpen, setMessageMenuOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", text: "" });
  useEffect(() => { if (!formStatus.text) return; const timer = setTimeout(() => setFormStatus({ type: "", text: "" }), 5000); return () => clearTimeout(timer); }, [formStatus]);
  const prefersReducedMotion = useReducedMotion();
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    setFormStatus({ type: "", text: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      setFormStatus({ type: "success", text: result.message || "Your message has been sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({ type: "error", text: error.message || "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
    {formStatus.text && <div className={`contact-toast ${formStatus.type}`} role="status" aria-live="polite"><span>{formStatus.text}</span><button type="button" aria-label="Dismiss notification" onClick={() => setFormStatus({ type: "", text: "" })}>×</button></div>}\n    <section id="contact" className="section section-band">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Have a project in mind?</h2>
          <p>Tell me a little about what you&apos;re working on. I&apos;d be glad to hear from you.</p>
          <form className="form" onSubmit={submit}>
            <div className="form-row">
              <label htmlFor="contact-name">Your name
                <input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label htmlFor="contact-email">Email address
                <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </label>
            </div>
            <label htmlFor="contact-subject">Subject
              <input id="contact-subject" name="subject" required value={form.subject} onChange={update("subject")} placeholder="What would you like to discuss?" />
            </label>
            <label htmlFor="contact-message">Message
              <textarea id="contact-message" name="message" rows={5} required value={form.message} onChange={update("message")} placeholder="A few details about your project..." />
            </label>

            <motion.button className="btn btn-primary" type="submit" disabled={sending} whileHover={prefersReducedMotion || sending ? undefined : { y: -1 }} whileTap={prefersReducedMotion || sending ? undefined : { scale: 0.98}}>{sending ? "Sending..." : "Send a message"} {!sending && <FaPaperPlane />}</motion.button>
          </form>
        </Reveal>
        <Reveal as="aside" className="contact-details">
          <h3>Prefer a direct conversation?</h3>
          <p>Reach out through any of these channels.</p>
          <a className="contact-detail" href={`mailto:${EMAIL}`}><FaEnvelope /><span>{EMAIL}</span></a>
          <a className="contact-detail" href={`tel:${PHONE}`}><FaPhoneAlt /><span>+880 1752 892755</span></a>
          <span className="contact-detail"><FaMapMarkerAlt /><span>Thakurgaon, Rangpur, Bangladesh</span></span>

        </Reveal>
      </div>
    </section>
      <div className="floating-contact">
        {messageMenuOpen && <div className="floating-contact-menu" role="menu" aria-label="Contact options">
          <a role="menuitem" href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noreferrer" className="floating-contact-option whatsapp"><FaWhatsapp /><span>WhatsApp</span></a>
          <a role="menuitem" href={MESSENGER_URL} target="_blank" rel="noreferrer" className="floating-contact-option messenger"><FaFacebookMessenger /><span>Messenger</span></a>
        </div>}
        <button className="floating-contact-toggle" type="button" aria-label={messageMenuOpen ? "Close contact menu" : "Open contact menu"} aria-expanded={messageMenuOpen} onClick={() => setMessageMenuOpen((open) => !open)}>{messageMenuOpen ? <FaTimes /> : <FaComments />}</button>
      </div>
    </>
  );
}
