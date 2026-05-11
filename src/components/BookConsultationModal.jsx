import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function BookConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>

            <h2>Book a Free Consultation</h2>
            <p>Tell us about your project and we'll get back within 24 hours.</p>

            {submitted ? (
              <div className="form-success">
                <div style={{ fontSize: '48px' }}>✓</div>
                <h3>Thank You!</h3>
                <p>We'll reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210" />
                </div>
                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    <option value="tech">Nexsof.tech — Technology</option>
                    <option value="event">Nexsof.event — Events</option>
                    <option value="production">Nexsof.production — Marketing</option>
                    <option value="legal">Nexsof.legal — Legal</option>
                    <option value="finance">Nexsof.finance — Finance</option>
                    <option value="full">Full Startup Incubation</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={4} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg form-submit">
                  Book Consultation
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
