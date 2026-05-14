import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/navbar.css';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled || mobileOpen ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img src="/logo_white.png" alt="Nexsof Logo" className="navbar-logo-img" />
        </NavLink>

        <div className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-cta">
          <button className="btn btn-primary btn-sm" onClick={onOpenModal}>
            Book Consultation
          </button>
        </div>

        <button
          className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        {links.map((link, i) => (
          <motion.div
            key={link.to}
            initial={{ opacity: 0, x: -20 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) => `navbar-mobile-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
        <div className="navbar-mobile-cta">
          <button className="btn btn-primary btn-lg" onClick={() => { setMobileOpen(false); onOpenModal(); }}>
            Book Consultation
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
