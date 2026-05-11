import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Calendar, Megaphone, Scale, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/services.css';

const serviceData = [
  {
    badge: 'tech', cls: 'tech', icon: <Code size={64} />,
    title: 'Nexsof.tech',
    desc: 'We build robust, scalable, and beautiful digital products that drive business growth. From sleek websites to complex enterprise software, our tech team delivers excellence.',
    features: ['Custom Web & Mobile App Development', 'UI/UX Design & Prototyping', 'Cloud Infrastructure & DevOps', 'Tech Consulting & Architecture', 'API Development & Integrations', 'AI & Machine Learning Solutions'],
  },
  {
    badge: 'event', cls: 'event', icon: <Calendar size={64} />,
    title: 'Nexsof.event',
    desc: 'Create unforgettable experiences that build brand recognition and forge lasting connections. We handle everything from intimate workshops to large-scale corporate events.',
    features: ['Brand Launch Events', 'Corporate Conferences & Seminars', 'Product Demo & Exhibition Setup', 'Virtual & Hybrid Event Management', 'Venue Selection & Logistics', 'Post-Event Analytics & Reporting'],
  },
  {
    badge: 'production', cls: 'production', icon: <Megaphone size={64} />,
    title: 'Nexsof.production',
    desc: "Amplify your brand's voice and reach your target audience with precision. Our marketing experts craft compelling campaigns that convert attention into revenue.",
    features: ['Brand Strategy & Identity Design', 'Social Media Management & Growth', 'Content Marketing & Copywriting', 'Paid Advertising (Google, Meta, LinkedIn)', 'Video Production & Photography', 'SEO & Performance Marketing'],
  },
  {
    badge: 'legal', cls: 'legal', icon: <Scale size={64} />,
    title: 'Nexsof.legal',
    desc: 'Navigate the complex legal landscape with confidence. We ensure your startup is fully compliant, protected, and positioned for growth from day one.',
    features: ['Company Registration & Incorporation', 'Regulatory Compliance & Licensing', 'Contract Drafting & Review', 'Intellectual Property Protection', 'Legal Advisory & Risk Assessment', 'MSME & Startup India Registration'],
  },
  {
    badge: 'finance', cls: 'finance', icon: <TrendingUp size={64} />,
    title: 'Nexsof.finance',
    desc: 'Secure the funding you need and build a financially sustainable business. We connect you with the right investors and create winning financial strategies.',
    features: ['Pitch Deck & Business Plan Creation', 'Investor Network & Connections', 'Seed & Series Funding Support', 'Financial Modeling & Projections', 'Bookkeeping & Tax Planning', 'Grant & Government Scheme Applications'],
  },
];

export default function Services({ onOpenModal }) {
  const navigate = useNavigate();

  return (
    <>
      <section className="services-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-badge" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.25)', background: 'rgba(34,211,238,0.08)' }}>Our Services</span>
            <h1>What We Offer</h1>
            <p>Five specialized divisions working together to power your business growth.</p>
          </motion.div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {serviceData.map((s, i) => (
            <AnimatedSection key={s.title}>
              <div className={`service-block ${i % 2 === 1 ? 'reverse' : ''}`}>
                <div className="service-block-content">
                  <span className={`service-block-badge ${s.badge}`}>{s.title}</span>
                  <h2>{s.title}</h2>
                  <p className="service-block-desc">{s.desc}</p>
                  <div className="service-block-features">
                    {s.features.map((f) => (
                      <div className="service-block-feature" key={f}>
                        <CheckCircle size={18} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpenModal}
                  >
                    Get a Quote
                  </motion.button>
                </div>
                <div className="service-block-visual">
                  <div className={`service-visual-bg ${s.cls}`}>
                    <div className="service-visual-icon">{s.icon}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
