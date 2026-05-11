import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, Facebook, CheckCircle, Map } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/contact.css';

export default function Contact({ onOpenModal }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (form.phone && !/^[+]?[\d\s-]{7,15}$/.test(form.phone)) e.phone = 'Invalid phone number';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-badge" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.25)', background: 'rgba(34,211,238,0.08)' }}>Contact</span>
            <h1>Get In Touch</h1>
            <p>Have a project in mind? Let's talk about how we can help you grow.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection direction="left">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p>Fill out the form and our team will respond within 24 hours.</p>

                {submitted ? (
                  <motion.div className="form-success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                    <CheckCircle size={56} />
                    <h3>Message Sent!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className={`form-input ${errors.name ? 'error' : ''}`} type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className={`form-input ${errors.email ? 'error' : ''}`} type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className={`form-input ${errors.phone ? 'error' : ''}`} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210" />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea className={`form-textarea ${errors.message ? 'error' : ''}`} name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} />
                      {errors.message && <div className="form-error">{errors.message}</div>}
                    </div>
                    <motion.button type="submit" className="btn btn-primary btn-lg form-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Mail size={22} /></div>
                  <div>
                    <h3>Email Us</h3>
                    <p>hello@nexsof.consultancy</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Phone size={22} /></div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 93057 52741</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><MapPin size={22} /></div>
                  <div>
                    <h3>Visit Us</h3>
                    <p>India</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><Clock size={22} /></div>
                  <div>
                    <h3>Working Hours</h3>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '12px' }}>Follow Us</h3>
                  <div className="contact-socials">
                    <a href="#" className="contact-social-btn" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    <a href="#" className="contact-social-btn" aria-label="Twitter"><Twitter size={18} /></a>
                    <a href="#" className="contact-social-btn" aria-label="Instagram"><Instagram size={18} /></a>
                    <a href="#" className="contact-social-btn" aria-label="Facebook"><Facebook size={18} /></a>
                  </div>
                </div>

                <div className="contact-map">
                  <Map size={32} />
                  <span>Map Integration Coming Soon</span>
                </div>

                <div className="contact-cta">
                  <h3>Book a Free Consultation</h3>
                  <p>Schedule a 30-minute call with our experts to discuss your business needs.</p>
                  <motion.button className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onOpenModal}>
                    Book Now
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
