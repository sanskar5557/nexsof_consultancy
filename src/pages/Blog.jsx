import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/blog.css';

const blogs = [
  { tag: 'Startup', cls: 'startup', title: 'How to Validate Your Startup Idea in 30 Days', desc: 'Learn the proven framework for testing your business concept quickly and efficiently before investing significant resources.', date: 'May 5, 2026', readTime: '5 min read' },
  { tag: 'Technology', cls: 'tech', title: 'Why Every Startup Needs a Strong Digital Presence in 2026', desc: 'Discover how a well-crafted website and digital strategy can be the difference between success and obscurity for your startup.', date: 'Apr 28, 2026', readTime: '4 min read' },
  { tag: 'Marketing', cls: 'production', title: 'Social Media Strategies That Actually Convert', desc: 'Move beyond vanity metrics. Learn the social media tactics that drive real business results and customer acquisition.', date: 'Apr 20, 2026', readTime: '6 min read' },
  { tag: 'Legal', cls: 'legal', title: 'Essential Legal Steps for New Startups in India', desc: 'A comprehensive guide to company registration, compliance requirements, and legal protections every founder needs to know.', date: 'Apr 15, 2026', readTime: '7 min read' },
  { tag: 'Finance', cls: 'finance', title: 'How to Create a Pitch Deck That Wins Investors', desc: 'The anatomy of a winning pitch deck — from problem statement to financial projections, learn what investors really look for.', date: 'Apr 8, 2026', readTime: '5 min read' },
  { tag: 'Events', cls: 'event', title: 'Planning a Product Launch Event That Generates Buzz', desc: 'From venue selection to PR strategy, here\'s how to plan a launch event that gets people talking about your brand.', date: 'Apr 1, 2026', readTime: '4 min read' },
];

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <section className="blog-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-badge" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.25)', background: 'rgba(34,211,238,0.08)' }}>Our Blog</span>
            <h1>Insights & Resources</h1>
            <p>Expert perspectives on startups, technology, marketing, and business growth.</p>
          </motion.div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogs.map((blog, i) => (
              <AnimatedSection key={blog.title} delay={i * 0.1}>
                <motion.div className="blog-card" whileHover={{ y: -6 }}>
                  <div className={`blog-card-image ${blog.cls}`} />
                  <div className="blog-card-body">
                    <span className="blog-card-tag">{blog.tag}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.desc}</p>
                    <div className="blog-card-meta">
                      <span>{blog.date} · {blog.readTime}</span>
                      <span className="blog-card-read-more" onClick={() => setSelectedBlog(blog)}>
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedBlog && (
          <div className="blog-modal-overlay" onClick={() => setSelectedBlog(null)}>
            <motion.div 
              className="blog-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="blog-modal-close" onClick={() => setSelectedBlog(null)}>
                <X size={20} />
              </button>
              <div className={`blog-modal-image ${selectedBlog.cls}`} />
              <div className="blog-modal-body">
                <span className="blog-card-tag">{selectedBlog.tag}</span>
                <h2>{selectedBlog.title}</h2>
                <div className="blog-modal-meta">
                  <span>{selectedBlog.date} · {selectedBlog.readTime}</span>
                </div>
                <div className="blog-modal-text">
                  <p>{selectedBlog.desc}</p>
                  <p>In a real application, this section would contain the full detailed content of the blog post. For now, it serves as a demonstration of the popup functionality, allowing users to read more without navigating away from the main insights page.</p>
                  <p>Our team at Nexsof Consultancy continually updates our blog with the latest industry trends, actionable advice, and expert perspectives to help your business thrive.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
