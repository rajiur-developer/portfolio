"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaEnvelope, FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

const EMAIL = "rajiurrahman21@gmail.com";
const PHONE = "+8801752892755";
const MESSENGER_URL = "https://m.me/mr.rj250530";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const prefersReducedMotion = useReducedMotion();
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section-band">
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
            <motion.button className="btn btn-primary" type="submit" whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>Send a message <FaPaperPlane /></motion.button>
          </form>
        </Reveal>
        <Reveal as="aside" className="contact-details">
          <h3>Prefer a direct conversation?</h3>
          <p>Reach out through any of these channels.</p>
          <a className="contact-detail" href={`mailto:${EMAIL}`}><FaEnvelope /><span>{EMAIL}</span></a>
          <a className="contact-detail" href={`tel:${PHONE}`}><FaPhoneAlt /><span>+880 1752 892755</span></a>
          <span className="contact-detail"><FaMapMarkerAlt /><span>Thakurgaon, Rangpur, Bangladesh</span></span>
          <a className="contact-channel" href={`https://wa.me/${PHONE.replace("+", "")}`} target="_blank" rel="noreferrer"><FaWhatsapp /><span>Connect on WhatsApp</span></a>
          <a className="contact-channel messenger" href={MESSENGER_URL} target="_blank" rel="noreferrer"><FaFacebookMessenger /><span>Connect on Messenger</span></a>
        </Reveal>
      </div>
    </section>
  );
}
