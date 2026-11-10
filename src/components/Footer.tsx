import React from 'react';
import { Microscope, MessageCircle, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLeadModal: () => void;
  onOpenAdminModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadModal, onOpenAdminModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-700 flex items-center justify-center text-white font-bold">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Histology <span className="text-teal-400">Mari</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Simplificando a Histologia, Embriologia e Microbiologia para futuros médicos. Aulas particulares e em grupo com foco prático em identificação de lâminas e aprovação nas provas do ciclo básico de Medicina.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Tacuru (MS) / Pedro Juan Caballero · Universidad Sudamericana</span>
            </div>
          </div>

          {/* Col 2: Contatos */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato Direto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5567999999999&text=Ol%C3%A1%20Mariana!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20mentorias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>WhatsApp de Atendimento</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@histologymari.com.br"
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>contato@histologymari.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/histology_mari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>@histology_mari</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Links do Site</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#atlas" className="hover:text-teal-400 transition-colors">
                  Laboratório de Lâminas
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-teal-400 transition-colors">
                  Sobre a Mariana
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-teal-400 transition-colors">
                  Metodologia Didática
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-teal-400 transition-colors">
                  Planos de Mentoria
                </a>
              </li>
              <li>
                <a href="#feedbacks" className="hover:text-teal-400 transition-colors">
                  Depoimentos de Alunos
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAdminModal}
                  className="text-xs text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1 mt-2"
                >
                  <span>Área Administrativa</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 Histology Mari · Mariana Correa. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
