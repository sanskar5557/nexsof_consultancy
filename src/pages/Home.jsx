import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Calendar, Megaphone, Scale, TrendingUp, Rocket, Shield, Users, Zap, Star, ChevronLeft, ChevronRight, ChevronDown, Quote } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/home.css';

const services = [
  { icon: <Code size={28} />, cls: 'tech', title: 'Nexsof.tech', desc: 'Web development, software solutions, tech consulting, and UI/UX design for modern businesses.' },
  { icon: <Calendar size={28} />, cls: 'event', title: 'Nexsof.event', desc: 'Event management, brand launches, corporate events, and memorable experiences.' },
  { icon: <Megaphone size={28} />, cls: 'production', title: 'Nexsof.production', desc: 'Marketing, branding, ad campaigns, and social media growth strategies.' },
  { icon: <Scale size={28} />, cls: 'legal', title: 'Nexsof.legal', desc: 'Startup registration, compliance, contracts, and complete legal advisory.' },
  { icon: <TrendingUp size={28} />, cls: 'finance', title: 'Nexsof.finance', desc: 'Funding support, investor connections, and strategic financial planning.' },
];

const whyUs = [
  { icon: <Rocket size={26} />, title: 'End-to-End Support', desc: 'From ideation to execution, we handle every aspect of building and growing your business.' },
  { icon: <Shield size={26} />, title: 'Trusted Expertise', desc: 'Our team of seasoned professionals brings years of industry experience across all domains.' },
  { icon: <Users size={26} />, title: 'Dedicated Teams', desc: 'Get dedicated teams assigned to your project, ensuring focused and personalized attention.' },
  { icon: <Zap size={26} />, title: 'Fast Execution', desc: 'We move quickly without compromising on quality, delivering results on tight deadlines.' },
];

const stats = [
  { number: '50+', label: 'Startups Supported' },
  { number: '200+', label: 'Projects Completed' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Industry Experts' },
];

const testimonials = [
  { name: 'Arjun Mehta', role: 'Founder, TechVista', text: 'Nexsof transformed our raw idea into a fully operational startup. Their end-to-end approach saved us months of work and thousands in costs.', initials: 'AM' },
  { name: 'Priya Sharma', role: 'CEO, GreenLeaf', text: 'The team at Nexsof is incredibly professional. They handled everything from our branding to legal compliance seamlessly. Highly recommend!', initials: 'PS' },
  { name: 'Rahul Kapoor', role: 'Co-founder, FinEdge', text: 'Working with Nexsof.finance was a game changer. They connected us with the right investors and helped us secure our Series A funding.', initials: 'RK' },
  { name: 'Sneha Gupta', role: 'Director, EventFlow', text: 'Our product launch event was flawless thanks to Nexsof.event. The attention to detail and execution was world-class.', initials: 'SG' },
  { name: 'Vikram Singh', role: 'CTO, DataPulse', text: 'Nexsof.tech delivered a robust platform that exceeded our expectations. Their technical expertise is truly top-notch.', initials: 'VS' },
];

export default function Home({ onOpenModal }) {
  const navigate = useNavigate();
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const trackRef = useRef(null);

  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // 5 seconds for better reading
    return () => clearInterval(interval);
  }, [testimonialIdx]); // Re-run interval when index changes to reset timer

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-badge">
            <Rocket size={14} /> Startup Incubation Ecosystem
          </div>
          <h1>
            From Idea to Empire —<br />
            <span className="highlight">We Build Your Business</span> End-to-End
          </h1>
          <p className="hero-sub">
            Nexsof Consultancy is your complete startup growth partner. We provide integrated solutions across technology, events, marketing, legal, and finance to turn your vision into reality.
          </p>
          <div className="hero-buttons">
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
            >
              Get Started
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge">Our Divisions</span>
            </div>
            <h2 className="section-title">Five Pillars of <span className="text-gradient">Business Growth</span></h2>
            <p className="section-subtitle">We cover every dimension of your startup journey with specialized divisions, each staffed by domain experts.</p>
          </AnimatedSection>

          <div className="services-grid">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <motion.div className="service-card" whileHover={{ y: -6 }}>
                  <div className={`service-card-icon ${s.cls}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge">Why Nexsof</span>
            </div>
            <h2 className="section-title">Why Choose <span className="text-gradient">Nexsof Consultancy</span></h2>
            <p className="section-subtitle">We don't just consult — we build alongside you. Here's what makes us different.</p>
          </AnimatedSection>

          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div className="why-us-card" whileHover={{ y: -4 }}>
                  <div className="why-us-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.15}>
                <div className="stat-item">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge">Testimonials</span>
            </div>
            <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
            <p className="section-subtitle">Real stories from founders and businesses we've helped grow.</p>
          </AnimatedSection>

          <div className="testimonials-track-wrapper">
            <motion.div 
              className="testimonials-track" 
              ref={trackRef}
              animate={{ x: `-${testimonialIdx * 100}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {testimonials.map((t, i) => {
                const isActive = i === testimonialIdx;
                return (
                  <motion.div
                    key={i}
                    className={`testimonial-card ${isActive ? 'active' : ''}`}
                    animate={{ 
                      scale: isActive ? 1 : 0.95,
                      opacity: isActive ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="testimonial-quote-icon">
                      <Quote size={40} fill="currentColor" />
                    </div>
                    <div className="testimonial-stars">
                      {[...Array(5)].map((_, si) => <Star key={si} size={16} fill="currentColor" />)}
                    </div>
                    <p className="testimonial-text">"{t.text}"</p>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">{t.initials}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="testimonials-footer">
            <div className="testimonials-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === testimonialIdx ? 'active' : ''}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="testimonials-controls">
              <button onClick={prevTestimonial} aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
              <button onClick={nextTestimonial} aria-label="Next testimonial"><ChevronRight size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <AnimatedSection>
            <h2>Ready to Build Your Empire?</h2>
            <p>Join 50+ startups that have accelerated their growth with Nexsof Consultancy.</p>
            <motion.button
              className="btn btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
            >
              Start Your Journey Today
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
