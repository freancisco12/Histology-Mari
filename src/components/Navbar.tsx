import React from 'react';
import { Microscope, Lock, Menu, X, FileSearch, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'site' | 'audit';
  setActiveTab: (tab: 'site' | 'audit') => void;
  onOpenLeadModal: (subject?: string) => void;
  onOpenAdminModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenLeadModal,
  onOpenAdminModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('site');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105 shadow-sm">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                Histology <span className="text-teal-700 dark:text-teal-400">Mari</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Aulas & Mentoria Médica
              </span>
            </div>
          </a>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        {activeTab === 'site' ? (
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href="#atlas"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Laboratório de Lâminas
            </a>
            <a
              href="#sobre"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Sobre a Mari
            </a>
            <a
              href="#metodo"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Metodologia
            </a>
            <a
              href="#planos"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Planos & Vagas
            </a>
            <a
              href="#feedbacks"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>
        ) : (
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-3 py-1.5 rounded-lg">
            <FileSearch className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
            <span>Modo de Auditoria Técnica & UX do Arquivo teste_mari.html</span>
          </div>
        )}

        {/* Zone 3: Actions (Audit Switch + Admin + Primary CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Mode toggle (Site vs Relatório de Análise) */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
            <button
              onClick={() => setActiveTab('site')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap ${
                activeTab === 'site'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="hidden sm:inline">Site Otimizado</span>
              <span className="sm:hidden">Site</span>
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all whitespace-nowrap ${
                activeTab === 'audit'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileSearch className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">Análise Completa</span>
              <span className="sm:hidden">Análise</span>
            </button>
          </div>

          {/* Admin shortcut */}
          <button
            onClick={onOpenAdminModal}
            className="p-2 text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title="Área Administrativa (Leads & Gestão)"
          >
            <Lock className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenLeadModal()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            Garantir Vaga
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a
              href="#atlas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Laboratório de Lâminas
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Sobre a Mari
            </a>
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Metodologia
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Planos & Vagas
            </a>
            <a
              href="#feedbacks"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Depoimentos dos Alunos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Dúvidas Frequentes
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm"
            >
              Garantir Vaga no WhatsApp
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminModal();
              }}
              className="w-full py-2 text-center text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              Acessar Painel da Mariana
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
