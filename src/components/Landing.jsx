import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Comparison from './Comparison';
import Download from './Download';
import FAQ from './FAQ';
import Footer from './Footer';
import ReleaseModal from './ReleaseModal';

const Landing = () => {
  const [isReleaseModalOpen, setIsReleaseModalOpen] = useState(false);

  const openReleaseModal = () => setIsReleaseModalOpen(true);
  const closeReleaseModal = () => setIsReleaseModalOpen(false);

  return (
    <>
      <Navbar onOpenReleaseModal={openReleaseModal} />
      <Hero />
      <Features />
      <Comparison />
      <Download onOpenReleaseModal={openReleaseModal} />
      <FAQ />
      <Footer />
      <ReleaseModal isOpen={isReleaseModalOpen} onClose={closeReleaseModal} />
    </>
  );
};

export default Landing;
