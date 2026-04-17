import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import WhatIsSection from "@/components/WhatIsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ROISection from "@/components/ROISection";
import ProcessSection from "@/components/ProcessSection";
import DiferenciadoresSection from "@/components/DiferenciadoresSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import WhatsAppModal from "@/components/WhatsAppModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundOrbs />
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <PartnersMarquee />
      <WhatIsSection />
      <SolutionsSection onOpenModal={openModal} />
      <ROISection />
      <ProcessSection />
      <DiferenciadoresSection />
      <FAQSection />
      <FinalCTASection onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <FloatingCTA onOpenModal={openModal} />
      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
