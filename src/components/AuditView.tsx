import React from 'react';
import { AUDIT_ANALYSIS } from '../data/mockData';
import { AlertTriangle, CheckCircle, Code, ShieldAlert, ArrowRight, Sparkles, TrendingUp, Laptop, ExternalLink, HeartPulse } from 'lucide-react';

interface AuditViewProps {
  onBackToSite: () => void;
  onOpenLeadModal: () => void;
}

export const AuditView: React.FC<AuditViewProps> = ({ onBackToSite, onOpenLeadModal }) => {
  const [selectedIssueId, setSelectedIssueId] = React.useState<string>(AUDIT_ANALYSIS[0].id);
  const activeIssue = AUDIT_ANALYSIS.find((i) => i.id === selectedIssueId) || AUDIT_ANALYSIS[0];

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner de Cabeçalho da Auditoria */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                <HeartPulse className="w-4 h-4" />
                <span>Auditoria Técnica & Otimização de Conversão</span>
                <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                <span className="text-slate-500">Arquivo: teste_mari_9d8b97ee.html</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Relatório de Análise da Landing Page da Mariana
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                Avaliamos o código HTML/CSS, a arquitetura visual, a usabilidade mobile e o funil de agendamento de aulas. Abaixo estão os erros críticos identificados, as oportunidades de conversão e como a versão otimizada soluciona cada gargalo.
              </p>
            </div>

            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <span>Ver Site Otimizado em Ação</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scorecards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">Integridade HTML</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-red-500">Bug Div</span>
                <span className="text-xs text-teal-600 font-semibold">→ Corrigido</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">Fuga de Tráfego</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-amber-500">Postimages</span>
                <span className="text-xs text-teal-600 font-semibold">→ Lightbox</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">Captura de Leads</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-red-500">0% Ação</span>
                <span className="text-xs text-teal-600 font-semibold">→ WhatsApp Real</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">Usabilidade Mobile</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-amber-500">Sem Menu</span>
                <span className="text-xs text-teal-600 font-semibold">→ Drawer Fluido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagnóstico Detalhado Item a Item */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Diagnóstico dos 6 Pontos Críticos Encontrados
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Selecione cada ocorrência para inspecionar o código defeituoso e a correção implementada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Lista Lateral de Ocorrências */}
            <div className="lg:col-span-5 space-y-3">
              {AUDIT_ANALYSIS.map((issue) => {
                const isSelected = issue.id === selectedIssueId;
                return (
                  <button
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 border-teal-600 dark:border-teal-500 shadow-sm ring-1 ring-teal-600'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        issue.severity === 'Crítico'
                          ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400'
                          : issue.severity === 'Alerta'
                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
                          : 'bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400'
                      }`}
                    >
                      {issue.severity === 'Crítico' ? (
                        <ShieldAlert className="w-4 h-4" />
                      ) : issue.severity === 'Alerta' ? (
                        <AlertTriangle className="w-4 h-4" />
                      ) : (
                        <Sparkles className="w-4 h-4" />
                      )}
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            issue.severity === 'Crítico'
                              ? 'text-red-600 dark:text-red-400'
                              : issue.severity === 'Alerta'
                              ? 'text-amber-600 dark:text-amber-400'
                              : 'text-teal-600 dark:text-teal-400'
                          }`}
                        >
                          {issue.severity}
                        </span>
                        <span className="text-[10px] text-slate-400">·</span>
                        <span className="text-[10px] font-medium text-slate-500">
                          {issue.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                        {issue.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {issue.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Painel de Detalhe e Código do Ponto Selecionado */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      activeIssue.severity === 'Crítico'
                        ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400'
                        : activeIssue.severity === 'Alerta'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400'
                        : 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400'
                    }`}
                  >
                    {activeIssue.severity}
                  </span>
                  <span className="text-xs text-slate-500">Categoria: {activeIssue.category}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeIssue.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeIssue.description}
                </p>
              </div>

              {/* Comparador de Código / Solução */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    Como estava no arquivo original (teste_mari.html):
                  </span>
                  <pre className="p-4 bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-xl text-xs font-mono text-red-800 dark:text-red-300 overflow-x-auto whitespace-pre-wrap">
                    {activeIssue.beforeSnippet}
                  </pre>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Como foi corrigido na versão otimizada:
                  </span>
                  <div className="p-4 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/50 rounded-xl text-xs text-teal-900 dark:text-teal-200 leading-relaxed">
                    {activeIssue.afterSolution}
                  </div>
                </div>
              </div>

              {/* Impacto no Negócio */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Impacto Direto na Conversão de Alunos:
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {activeIssue.impact}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tabela Comparativa Resumida: Antes vs Depois */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Tabela Comparativa: Versão Original vs Versão Otimizada
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Visão consolidada de todas as melhorias técnicas, visuais e pedagógicas aplicadas.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-3 px-4">Critério</th>
                  <th className="py-3 px-4 text-red-600 dark:text-red-400">Versão Anterior (teste_mari.html)</th>
                  <th className="py-3 px-4 text-teal-700 dark:text-teal-400">Versão Otimizada (App React)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    Exibição de Imagens e Lâminas
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    Links externos clicáveis levando para postimages.org (perda imediata do aluno).
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    Lightbox com zoom microscópico (75% a 250%) mantendo o acadêmico no site.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    Simulador Interativo
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    Nenhum. Apenas texto estático alegando que as aulas são visuais.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    "Atlas da Mari": lâminas de Traqueia, Embrião e Gram com marcadores anatômicos e dicas de prova.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    Funil de Agendamento (WhatsApp)
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    Formulário sem destino que fingia enviar e ocultava os dados.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    Disparo instantâneo com texto pré-montado no WhatsApp + salvamento automático no CRM.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    Painel da Mariana (Área Restrita)
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    Modal com erro forçado sem funcionalidade alguma.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    Painel completo com senha (mari2026), lista de leads, filtros e exportação para CSV.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                    Identidade Visual & Tipografia
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                    Inter via CDN com tags arredondadas estilo pílula e dot piscando artificialmente.
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                    Plus Jakarta Sans com hierarquia editorial médica, paleta teal refinada e zero-pill discipline.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recomendações Estratégicas para Escalar as Mentorias */}
        <div className="bg-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Próximos Passos Comerciais</span>
          </div>
          <h3 className="text-2xl font-bold">
            3 Recomendações Estratégicas para a Mariana Aumentar Vendas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-teal-100">
            <div className="p-4 bg-teal-950/60 rounded-2xl border border-teal-800 space-y-2">
              <span className="text-xl font-bold text-white">01</span>
              <h4 className="font-bold text-white">Link direto na Bio do Instagram</h4>
              <p className="text-xs text-teal-200 leading-relaxed">
                Colocar o link desta landing page na bio do perfil @histology_mari com um CTA claro: "Acesse nosso Atlas de Lâminas e garanta vaga para sua prova".
              </p>
            </div>

            <div className="p-4 bg-teal-950/60 rounded-2xl border border-teal-800 space-y-2">
              <span className="text-xl font-bold text-white">02</span>
              <h4 className="font-bold text-white">Turmas de Véspera de Prova</h4>
              <p className="text-xs text-teal-200 leading-relaxed">
                Criar "Aulões de 3 Horas com 20 Lâminas Garantidas" na semana que antecede as provas práticas da Sudamericana e UCP, abrindo grupos de 6 a 10 alunos.
              </p>
            </div>

            <div className="p-4 bg-teal-950/60 rounded-2xl border border-teal-800 space-y-2">
              <span className="text-xl font-bold text-white">03</span>
              <h4 className="font-bold text-white">Banco de Questões e Atlas em PDF</h4>
              <p className="text-xs text-teal-200 leading-relaxed">
                Oferecer um mini-guia gratuito em PDF (ex: "As 15 Lâminas Mais Cobradas em Histologia") como isca digital no WhatsApp antes de fechar o plano de aulas particulares.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-teal-800">
            <p className="text-xs text-teal-300">
              Pronto para ver o resultado prático aplicado no site?
            </p>
            <button
              onClick={onBackToSite}
              className="px-6 py-3 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              Voltar para o Site Principal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
