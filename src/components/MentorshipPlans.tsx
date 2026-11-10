import React from 'react';
import { MENTORSHIP_PLANS } from '../data/mockData';
import { Check, MessageCircle, Calculator, Sparkles, Clock, Users, BookMarked } from 'lucide-react';
import { SubjectType } from '../types';

interface MentorshipPlansProps {
  onOpenLeadModal: (subject?: string) => void;
}

export const MentorshipPlans: React.FC<MentorshipPlansProps> = ({ onOpenLeadModal }) => {
  // Calculator state
  const [calcSubject, setCalcSubject] = React.useState<SubjectType>('Histologia');
  const [calcGoal, setCalcGoal] = React.useState<'urgente' | 'modulo' | 'semestral'>('urgente');
  const [calcFormat, setCalcFormat] = React.useState<'individual' | 'dupla'>('individual');

  const goalDetails = {
    urgente: {
      hours: '4 horas intensivas',
      ideal: 'Foco exclusivo nas lâminas e pegadinhas da prova que acontece nos próximos 7 dias.',
      timeframe: 'Reta final'
    },
    modulo: {
      hours: '10 horas de imersão',
      ideal: 'Domínio completo de um bloco temático (ex: Sistema Respiratório e Digestivo ou Arcos Faríngeos).',
      timeframe: 'Preparação com 3 a 4 semanas'
    },
    semestral: {
      hours: 'Acompanhamento semanal',
      ideal: 'Mentoria contínua durante todo o semestre com simulados e suporte pré-prova constante.',
      timeframe: 'Semestre letivo'
    }
  };

  const currentDetail = goalDetails[calcGoal];

  const handleSendCustomWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Mariana! Acessei o site Histology Mari e montei uma proposta de mentoria:\n` +
      `📚 Matéria: ${calcSubject}\n` +
      `🎯 Objetivo: ${currentDetail.timeframe} (${currentDetail.hours})\n` +
      `👥 Formato: ${calcFormat === 'individual' ? 'Aula Individual VIP' : 'Estudo em Dupla'}\n` +
      `Gostaria de consultar as vagas e horários disponíveis na sua agenda!`
    );
    // Mariana's WhatsApp contact
    window.open(`https://api.whatsapp.com/send?phone=5567999999999&text=${text}`, '_blank');
  };

  return (
    <section id="planos" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-2">
            <span>Investimento Acadêmico</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Flexibilidade de Horários</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Formatos de Mentoria Sob Medida
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-3">
            Escolha o modelo que melhor se adapta à sua rotina de estudos e ao calendário de provas da sua faculdade.
          </p>
        </div>

        {/* 3 Main Plans Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {MENTORSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-500 shadow-xl relative'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {plan.title}
                    </h3>
                    <span className="text-xs font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2.5 py-1 rounded-md">
                      {plan.format}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {plan.idealFor}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    O que está incluso:
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenLeadModal(plan.title)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar Disponibilidade</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Custom Mentorship Calculator */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Simulador de Carga Horária Personalizada
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Responda 3 perguntas rápidas para receber uma recomendação exata para a sua prova.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Step 1: Subject */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookMarked className="w-3.5 h-3.5 text-teal-600" />
                1. Disciplina
              </label>
              <select
                value={calcSubject}
                onChange={(e) => setCalcSubject(e.target.value as SubjectType)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
              >
                <option value="Histologia">Histologia Geral / dos Sistemas</option>
                <option value="Embriologia">Embriologia Médica</option>
                <option value="Microbiologia">Microbiologia / Bacteriologia</option>
                <option value="Geral">Pacote Ciclo Básico Integrado</option>
              </select>
            </div>

            {/* Step 2: Goal */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                2. Momento Atual
              </label>
              <select
                value={calcGoal}
                onChange={(e) => setCalcGoal(e.target.value as 'urgente' | 'modulo' | 'semestral')}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
              >
                <option value="urgente">Semana de Prova (Urgência)</option>
                <option value="modulo">Módulo Específico (3 a 4 semanas)</option>
                <option value="semestral">Acompanhamento Semestral</option>
              </select>
            </div>

            {/* Step 3: Format */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-teal-600" />
                3. Formato
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcFormat('individual')}
                  className={`py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                    calcFormat === 'individual'
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => setCalcFormat('dupla')}
                  className={`py-2.5 text-xs font-semibold rounded-xl border transition-all ${
                    calcFormat === 'dupla'
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  Em Dupla
                </button>
              </div>
            </div>

          </div>

          {/* Calculator Output Recommendation Card */}
          <div className="mt-8 p-5 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-100 dark:border-teal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-left w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                <span className="text-xs font-bold uppercase text-teal-800 dark:text-teal-300">
                  Recomendação Ideal da Mari:
                </span>
                <span className="text-sm font-extrabold text-teal-950 dark:text-white">
                  {currentDetail.hours}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {currentDetail.ideal}
              </p>
            </div>

            <button
              onClick={handleSendCustomWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Simulação no WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
