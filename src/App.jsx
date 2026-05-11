import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookConsultationModal from './components/BookConsultationModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenModal={openModal} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact onOpenModal={openModal} />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <BookConsultationModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
