/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveAtlas } from './components/InteractiveAtlas';
import { AboutMari } from './components/AboutMari';
import { Methodology } from './components/Methodology';
import { MentorshipPlans } from './components/MentorshipPlans';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AuditView } from './components/AuditView';
import { LeadModal } from './components/LeadModal';
import { AdminModal } from './components/AdminModal';
import { ImageLightbox } from './components/ImageLightbox';
import { INITIAL_LEADS } from './data/mockData';
import { Lead } from './types';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<'site' | 'audit'>('site');
  const [isLeadModalOpen, setIsLeadModalOpen] = React.useState(false);
  const [leadDefaultSubject, setLeadDefaultSubject] = React.useState<string | undefined>();
  const [isAdminModalOpen, setIsAdminModalOpen] = React.useState(false);
  
  // Image Lightbox state
  const [lightboxState, setLightboxState] = React.useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    subtitle: ''
  });

  // Leads state with localStorage persistence
  const [leads, setLeads] = React.useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem('histology_mari_leads');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return INITIAL_LEADS;
  });

  const handleLeadCreated = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    setLeads(updated);
    try {
      localStorage.setItem('histology_mari_leads', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleUpdateLeadStatus = (id: string, status: Lead['status']) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    try {
      localStorage.setItem('histology_mari_leads', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    try {
      localStorage.setItem('histology_mari_leads', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleOpenLeadModal = (subject?: string) => {
    setLeadDefaultSubject(subject);
    setIsLeadModalOpen(true);
  };

  const handleOpenImageLightbox = (url: string, title: string, subtitle?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl: url,
      title,
      subtitle
    });
  };

  const handleCloseImageLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-700 selection:text-white">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLeadModal={handleOpenLeadModal}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20">
        {activeTab === 'site' ? (
          <>
            <Hero
              onOpenLeadModal={handleOpenLeadModal}
              onOpenImageLightbox={handleOpenImageLightbox}
            />
            <InteractiveAtlas
              onOpenImageLightbox={handleOpenImageLightbox}
              onOpenLeadModal={handleOpenLeadModal}
            />
            <AboutMari
              onOpenImageLightbox={handleOpenImageLightbox}
              onOpenLeadModal={handleOpenLeadModal}
            />
            <Methodology
              onOpenImageLightbox={handleOpenImageLightbox}
              onOpenLeadModal={handleOpenLeadModal}
            />
            <MentorshipPlans onOpenLeadModal={handleOpenLeadModal} />
            <Testimonials
              onOpenImageLightbox={handleOpenImageLightbox}
              onOpenLeadModal={handleOpenLeadModal}
            />
            <FAQ onOpenLeadModal={() => handleOpenLeadModal()} />
          </>
        ) : (
          <AuditView
            onBackToSite={() => {
              setActiveTab('site');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLeadModal={() => handleOpenLeadModal()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadModal={() => handleOpenLeadModal()}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
      />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        defaultSubject={leadDefaultSubject}
        onLeadCreated={handleLeadCreated}
      />

      {/* Admin Panel Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        leads={leads}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onDeleteLead={handleDeleteLead}
      />

      {/* In-App Image Zoom Lightbox (Eliminates leaks to postimages) */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseImageLightbox}
        imageUrl={lightboxState.imageUrl}
        altText={lightboxState.title}
        subtitle={lightboxState.subtitle}
      />
    </div>
  );
}
