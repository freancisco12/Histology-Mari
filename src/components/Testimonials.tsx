import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { MessageSquareQuote, CheckCircle2, Maximize2, Sparkles } from 'lucide-react';

interface TestimonialsProps {
  onOpenImageLightbox: (url: string, title: string, subtitle?: string) => void;
  onOpenLeadModal: (subject?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onOpenImageLightbox,
  onOpenLeadModal
}) => {
  return (
    <section id="feedbacks" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-2">
            <span>Resultados Comprovados</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Mensagens Reais no WhatsApp</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            O que dizem os estudantes de Medicina que fizeram mentoria?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3">
            Prints reais enviados por alunos após as provas práticas e teóricas do ciclo básico.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-shadow"
            >
              
              {/* Screenshot Frame with Zoom Trigger */}
              <div
                onClick={() =>
                  onOpenImageLightbox(
                    item.fullScreenshotUrl,
                    `Mensagem de Aluno · ${item.subject}`,
                    item.university
                  )
                }
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-700 aspect-16/10 flex items-center justify-center"
              >
                <img
                  src={item.fullScreenshotUrl}
                  alt={`Feedback de ${item.studentName} sobre ${item.subject}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-1.5 bg-slate-900/90 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                    Ampliar Conversa
                  </span>
                </div>
              </div>

              {/* Quote & Meta */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquareQuote className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-200 italic leading-snug">
                    {item.highlightText}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">
                      {item.studentName}
                    </p>
                    <p className="text-[11px]">{item.university}</p>
                  </div>
                  {item.grade && (
                    <span className="flex items-center gap-1 font-semibold text-teal-700 dark:text-teal-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.grade}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Sua prova está chegando e você precisa de segurança?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Monte um plano intensivo de revisão focado nas lâminas e temas cobrados na sua banca.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenLeadModal()}
            className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Quero Me Preparar com a Mari
          </button>
        </div>

      </div>
    </section>
  );
};
