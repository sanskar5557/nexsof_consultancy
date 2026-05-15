import { motion } from 'framer-motion';
import { Target, Eye, Building2, Lightbulb } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/about.css';

const timeline = [
  { year: '2023', title: 'The Spark', desc: 'Nexsof Consultancy was born from a simple idea — startups deserve complete support, not fragmented advice.' },
  { year: '2024', title: 'Building the Ecosystem', desc: 'We launched our five core divisions: tech, events, production, legal, and finance to cover every startup need.' },
  { year: '2025', title: 'Growing Impact', desc: 'Supported 50+ startups and completed 200+ projects across India, establishing ourselves as a trusted incubation partner.' },
  { year: '2026', title: 'Scaling New Heights', desc: 'Expanding our reach with strategic partnerships, advanced AI integration, and international startup incubation programs.' },
];

const team = [
  { name: 'Sanskar Khanna', role: 'Founder & CEO', initials: 'SK', bio: 'Visionary entrepreneur driving the Nexsof ecosystem with passion for startup innovation.' },
  { name: 'Ananya Verma', role: 'Head of Technology', initials: 'AV', bio: 'Full-stack expert leading cutting-edge tech solutions and digital transformation.' },
  { name: 'Rohan Patel', role: 'Head of Events', initials: 'RP', bio: 'Creative strategist delivering world-class events and brand experiences.' },
  { name: 'Meera Singh', role: 'Head of Legal', initials: 'MS', bio: 'Legal expert ensuring startups navigate compliance and regulations seamlessly.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-badge" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.25)', background: 'rgba(34,211,238,0.08)' }}>About Us</span>
            <h1>Our Story</h1>
            <p>Building the future of startup incubation, one business at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <AnimatedSection direction="left">
              <div className="about-intro-content">
                <h2>We're Not Just Consultants — We're <span className="text-gradient">Co-Builders</span></h2>
                <p>Nexsof Consultancy was founded with a singular mission: to eliminate the fragmentation that plagues startup support. Too many founders juggle multiple agencies, freelancers, and advisors — we bring it all under one roof.</p>
                <p>Our integrated ecosystem spans five specialized divisions, each with dedicated experts who work in concert to accelerate your business from concept to market leader. We don't just advise — we roll up our sleeves and build alongside you.</p>
                <p>Whether you need a cutting-edge web platform, a stunning brand launch event, aggressive marketing campaigns, airtight legal compliance, or strategic funding — Nexsof is your single point of contact for complete business growth.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="about-intro-image">
                <div className="about-intro-image-placeholder">
                  <Building2 size={64} />
                  <span>Nexsof Headquarters</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge">Our Purpose</span>
            </div>
            <h2 className="section-title">Mission & <span className="text-gradient">Vision</span></h2>
            <p className="section-subtitle">Guided by a clear purpose and bold ambition for the future.</p>
          </AnimatedSection>

          <div className="mission-vision-grid">
            <AnimatedSection delay={0.1} className="mv-item">
              <motion.div className="mv-card" whileHover={{ y: -4 }}>
                <div className="mv-card-icon"><Target size={28} /></div>
                <h3>Our Mission</h3>
                <p>To democratize startup success by providing comprehensive, integrated, and affordable business growth solutions. We believe every great idea deserves the infrastructure, expertise, and support to become a thriving enterprise.</p>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mv-item">
              <motion.div className="mv-card" whileHover={{ y: -4 }}>
                <div className="mv-card-icon"><Eye size={28} /></div>
                <h3>Our Vision</h3>
                <p>To become the world's most trusted startup incubation ecosystem — where founders find everything they need under one roof, from the first line of code to their first million in revenue.</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge"><Lightbulb size={14} /> Our Journey</span>
            </div>
            <h2 className="section-title">The <span className="text-gradient">Nexsof Journey</span></h2>
            <p className="section-subtitle">Key milestones that shaped who we are today.</p>
          </AnimatedSection>

          <div className="timeline">
            {timeline.map((item, i) => (
              <AnimatedSection 
                key={item.year} 
                delay={i * 0.15} 
                className="timeline-item"
                direction={i % 2 === 0 ? 'right' : 'left'}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center' }}>
              <span className="section-badge">Our Team</span>
            </div>
            <h2 className="section-title">Meet the <span className="text-gradient">People</span> Behind Nexsof</h2>
            <p className="section-subtitle">A passionate team of industry experts committed to your success.</p>
          </AnimatedSection>

          <div className="team-grid">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div className="team-card" whileHover={{ y: -4 }}>
                  <div className="team-avatar">{member.initials}</div>
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-bio">{member.bio}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
