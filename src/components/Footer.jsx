import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">N</div>
              <span>Nexsof Consultancy</span>
            </div>
            <p>From Idea to Empire — We provide end-to-end business growth solutions for startups and enterprises across technology, events, marketing, legal, and finance.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="footer-social-link" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="footer-social-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="footer-social-link" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <NavLink to="https://www.nexsof.tech/en">Nexsof.tech</NavLink>
            <NavLink to="/services">Nexsof.event</NavLink>
            <NavLink to="https://nexsof-production.vercel.app/">Nexsof.production</NavLink>
            <NavLink to="/services">Nexsof.legal</NavLink>
            <NavLink to="/services">Nexsof.finance</NavLink>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>hello@nexsof.consultancy</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>+91 93057 541</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexsof Consultancy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
