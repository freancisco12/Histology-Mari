import React from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQProps {
  onOpenLeadModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenLeadModal }) => {
  const [openIds, setOpenIds] = React.useState<string[]>([FAQS[0].id]);
  const [activeCategory, setActiveCategory] = React.useState<string>('Todas');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['Todas', 'Aulas', 'Metodologia', 'Pagamento e Agendamento'];

  const filteredFaqs =
    activeCategory === 'Todas'
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2">
            Tudo o que você precisa saber sobre o formato das aulas, metodologia e agendamento.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Ainda ficou com alguma dúvida sobre sua matéria específica?
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
            A Mariana responde você diretamente para entender a ementa da sua prova.
          </p>
          <button
            onClick={onOpenLeadModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Mari no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
