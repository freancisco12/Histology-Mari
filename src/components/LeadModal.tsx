import React from 'react';
import { X, Send, CheckCircle2, MessageCircle, GraduationCap } from 'lucide-react';
import { Lead, SubjectType } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
  onLeadCreated: (lead: Lead) => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultSubject,
  onLeadCreated
}) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('+55');
  const [university, setUniversity] = React.useState('Universidad Sudamericana');
  const [subject, setSubject] = React.useState<SubjectType>('Histologia');
  const [period, setPeriod] = React.useState('2º Semestre');
  const [notes, setNotes] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = React.useState('');

  React.useEffect(() => {
    if (defaultSubject) {
      if (defaultSubject.includes('Histologia')) setSubject('Histologia');
      else if (defaultSubject.includes('Embriologia')) setSubject('Embriologia');
      else if (defaultSubject.includes('Microbiologia')) setSubject('Microbiologia');
    }
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [defaultSubject, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullPhone = `${countryCode} ${phone.trim()}`;
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: name.trim(),
      whatsapp: fullPhone,
      subject,
      university,
      period,
      notes: notes.trim(),
      createdAt: new Date().toISOString().slice(0, 16).replace('T', ' '),
      status: 'Novo'
    };

    onLeadCreated(newLead);

    // Build pre-formatted WhatsApp text
    const message = encodeURIComponent(
      `Olá Mariana! Tudo bem?\n` +
      `Me chamo *${name.trim()}* e tenho interesse nas suas aulas de mentoria de Medicina.\n\n` +
      `📚 *Matéria de Interesse:* ${subject}\n` +
      `🏛️ *Faculdade:* ${university} (${period})\n` +
      (notes.trim() ? `📝 *Minha Dúvida/Objetivo:* ${notes.trim()}\n\n` : `\n`) +
      `Gostaria de saber quais são os próximos horários disponíveis na sua agenda para alinharmos!`
    );

    const waUrl = `https://api.whatsapp.com/send?phone=5567999999999&text=${message}`;
    setGeneratedWaUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Fale com a Mariana
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Preencha seus dados para receber o cronograma de vagas e horários de mentoria direto no seu WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria Luiza Silva"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp com DDD
                </label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-24 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+595">🇵🇾 +595</option>
                    <option value="+54">🇦🇷 +54</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="99999-9999"
                    className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Matéria Principal
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value as SubjectType)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Histologia">Histologia</option>
                    <option value="Embriologia">Embriologia</option>
                    <option value="Microbiologia">Microbiologia</option>
                    <option value="Geral">Ciclo Básico Geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Faculdade
                  </label>
                  <select
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Universidad Sudamericana">Sudamericana</option>
                    <option value="UCP">UCP</option>
                    <option value="UNIGRAN">UNIGRAN</option>
                    <option value="UPAP">UPAP</option>
                    <option value="UFMS">UFMS</option>
                    <option value="Outra Faculdade">Outra Faculdade</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Semana da Prova ou Dúvida Principal (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Minha prova prática de lâminas é dia 18 e tenho muita dúvida em tecidos conjuntivos e traqueia."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-3"
              >
                <span>Enviar Dados & Abrir no WhatsApp</span>
                <MessageCircle className="w-4 h-4 text-teal-200" />
              </button>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                Pronto, {name}!
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                Seus dados foram registrados com sucesso. A Mariana já está ciente do seu interesse em {subject}.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={generatedWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Conversa no WhatsApp Agora</span>
              </a>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium py-2.5 rounded-xl text-xs transition-colors"
              >
                Voltar para o Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
