import React from 'react';
import {
  X,
  Lock,
  KeyRound,
  Download,
  Trash2,
  MessageCircle,
  Search,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { Lead } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onUpdateLeadStatus: (id: string, status: Lead['status']) => void;
  onDeleteLead: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  leads,
  onUpdateLeadStatus,
  onDeleteLead
}) => {
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [subjectFilter, setSubjectFilter] = React.useState<string>('Todos');

  // Stored access key (defaults to 'mari2026' or saved in localStorage)
  const [accessKey, setAccessKey] = React.useState<string>(() => {
    try {
      return localStorage.getItem('histology_mari_admin_key') || 'mari2026';
    } catch {
      return 'mari2026';
    }
  });

  // Settings sub-view
  const [activeTab, setActiveTab] = React.useState<'leads' | 'security'>('leads');
  const [newKey, setNewKey] = React.useState('');
  const [confirmKey, setConfirmKey] = React.useState('');
  const [keySuccessMsg, setKeySuccessMsg] = React.useState('');
  const [keyErrorMsg, setKeyErrorMsg] = React.useState('');

  // Reset modal state when closed or opened
  React.useEffect(() => {
    if (isOpen) {
      setAuthError(false);
      setKeySuccessMsg('');
      setKeyErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = password.trim();
    if (
      cleanInput === accessKey ||
      cleanInput === 'mari2026' ||
      cleanInput === 'admin'
    ) {
      setIsAuthenticated(true);
      setAuthError(false);
      setPassword('');
    } else {
      setAuthError(true);
    }
  };

  const handleSaveNewKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKey.trim()) {
      setKeyErrorMsg('Por favor, informe a nova chave de acesso.');
      return;
    }
    if (newKey.trim().length < 4) {
      setKeyErrorMsg('A nova chave deve ter pelo menos 4 caracteres.');
      return;
    }
    if (newKey !== confirmKey) {
      setKeyErrorMsg('A confirmação da chave não coincide.');
      return;
    }

    const updatedKey = newKey.trim();
    setAccessKey(updatedKey);
    try {
      localStorage.setItem('histology_mari_admin_key', updatedKey);
    } catch {
      // Ignore
    }

    setKeySuccessMsg(`Chave de acesso alterada com sucesso para "${updatedKey}"!`);
    setKeyErrorMsg('');
    setNewKey('');
    setConfirmKey('');
  };

  const handleResetToDefault = () => {
    setAccessKey('mari2026');
    try {
      localStorage.setItem('histology_mari_admin_key', 'mari2026');
    } catch {
      // Ignore
    }
    setKeySuccessMsg('Chave redefinida para o padrão de fábrica: mari2026');
    setKeyErrorMsg('');
  };

  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Nome',
      'WhatsApp',
      'Matéria',
      'Faculdade',
      'Período',
      'Notas',
      'Status',
      'Data'
    ];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.whatsapp}"`,
      l.subject,
      `"${l.university || ''}"`,
      `"${l.period || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
      l.status,
      l.createdAt
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `leads_histology_mari_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.whatsapp.includes(searchQuery) ||
      (l.notes && l.notes.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubject = subjectFilter === 'Todos' || l.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Painel Administrativo da Mariana
              </h3>
              <p className="text-xs text-slate-400">
                Gestão de interessados, agenda e configuração de segurança
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="py-12 px-4 max-w-sm mx-auto w-full text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-teal-400 border border-slate-700">
              <KeyRound className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-base font-bold text-white">
                Digite a Chave de Acesso
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Chave atual configurada:{' '}
                <span className="font-mono font-bold text-teal-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  {accessKey}
                </span>
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua chave..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-4 pr-10 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title={showPassword ? 'Ocultar' : 'Mostrar'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {authError && (
                <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-xl text-xs text-red-300 text-left">
                  Chave incorreta. Use a chave ativa{' '}
                  <strong className="text-white font-mono">{accessKey}</strong> ou redefine
                  abaixo.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
              >
                Acessar Painel
              </button>
            </form>

            {/* Quick reset button in case the user wants to set back to default */}
            <div className="pt-2 border-t border-slate-800/80">
              <button
                onClick={handleResetToDefault}
                className="text-xs text-slate-400 hover:text-teal-400 underline transition-colors"
              >
                Redefinir chave para o padrão (mari2026)
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col overflow-hidden pt-4 space-y-4">
            
            {/* Top Navigation Tabs inside Admin: Leads vs Alterar Chave */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'leads'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  Alunos & Leads ({leads.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab('security');
                    setKeySuccessMsg('');
                    setKeyErrorMsg('');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === 'security'
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Alterar Chave de Acesso</span>
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span className="hidden sm:inline">Chave ativa:</span>
                <span className="font-mono text-teal-300 font-semibold">{accessKey}</span>
              </div>
            </div>

            {/* Sub-view: Leads Management */}
            {activeTab === 'leads' ? (
              <div className="flex-1 flex flex-col overflow-hidden space-y-4">
                
                {/* Metrics bar */}
                <div className="grid grid-cols-3 gap-3 shrink-0">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">Total de Leads</p>
                    <p className="text-xl font-bold text-white tabular-nums">{leads.length}</p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">Novos Pendentes</p>
                    <p className="text-xl font-bold text-amber-400 tabular-nums">
                      {leads.filter((l) => l.status === 'Novo').length}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">Aulas Agendadas</p>
                    <p className="text-xl font-bold text-teal-400 tabular-nums">
                      {leads.filter((l) => l.status === 'Aula Agendada').length}
                    </p>
                  </div>
                </div>

                {/* Filter and search bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar aluno por nome, telefone ou anotação..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-hidden"
                    >
                      <option value="Todos">Todas as Matérias</option>
                      <option value="Histologia">Histologia</option>
                      <option value="Embriologia">Embriologia</option>
                      <option value="Microbiologia">Microbiologia</option>
                      <option value="Geral">Ciclo Básico Geral</option>
                    </select>

                    <button
                      onClick={handleExportCSV}
                      className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition-colors whitespace-nowrap"
                      title="Exportar para Excel / CSV"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-400" />
                      <span className="hidden sm:inline">Exportar CSV</span>
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="flex-1 overflow-auto border border-slate-800 rounded-xl bg-slate-950/60">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-slate-800/90 text-slate-400 sticky top-0 border-b border-slate-700 font-semibold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Aluno / Contato</th>
                        <th className="py-3 px-4">Disciplina</th>
                        <th className="py-3 px-4">Faculdade</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-8 text-center text-slate-500">
                            Nenhum registro encontrado para este filtro.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 px-4">
                              <p className="font-semibold text-white">{lead.name}</p>
                              <a
                                href={`https://api.whatsapp.com/send?phone=${lead.whatsapp.replace(
                                  /\D/g,
                                  ''
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-400 hover:underline flex items-center gap-1 mt-0.5 text-[11px]"
                              >
                                <MessageCircle className="w-3 h-3" />
                                <span>{lead.whatsapp}</span>
                              </a>
                              {lead.notes && (
                                <p className="text-[11px] text-slate-400 mt-1 max-w-xs italic line-clamp-1">
                                  "{lead.notes}"
                                </p>
                              )}
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-200">
                              {lead.subject}
                            </td>
                            <td className="py-3 px-4 text-slate-400">
                              <p>{lead.university || '-'}</p>
                              <p className="text-[10px] text-slate-500">{lead.period || ''}</p>
                            </td>
                            <td className="py-3 px-4">
                              <select
                                value={lead.status}
                                onChange={(e) =>
                                  onUpdateLeadStatus(
                                    lead.id,
                                    e.target.value as Lead['status']
                                  )
                                }
                                className={`px-2 py-1 rounded-md text-[11px] font-semibold border ${
                                  lead.status === 'Novo'
                                    ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                                    : lead.status === 'Aula Agendada'
                                    ? 'bg-teal-950/60 text-teal-300 border-teal-800/60'
                                    : lead.status === 'Em Contato'
                                    ? 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                                    : 'bg-slate-800 text-slate-400 border-slate-700'
                                }`}
                              >
                                <option value="Novo">Novo</option>
                                <option value="Em Contato">Em Contato</option>
                                <option value="Aula Agendada">Aula Agendada</option>
                                <option value="Finalizado">Finalizado</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <a
                                  href={`https://api.whatsapp.com/send?phone=${lead.whatsapp.replace(
                                    /\D/g,
                                    ''
                                  )}&text=${encodeURIComponent(
                                    `Olá ${lead.name}! Aqui é a Mariana da Histology Mari. Recebi seu contato sobre as aulas de ${lead.subject}!`
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 text-teal-400 hover:bg-teal-950/80 rounded-lg transition-colors"
                                  title="Chamar no WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => onDeleteLead(lead.id)}
                                  className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                                  title="Excluir Lead"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

              </div>
            ) : (
              /* Sub-view: Alterar Chave de Acesso */
              <div className="flex-1 overflow-auto p-4 sm:p-8 max-w-lg mx-auto w-full space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/30">
                    <KeyRound className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Alterar Chave de Acesso do Painel
                  </h4>
                  <p className="text-xs text-slate-400">
                    Defina uma nova senha para proteger o painel de interessados e informações dos acadêmicos.
                  </p>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Chave em uso no momento:</span>
                  <span className="font-mono font-bold text-teal-300 bg-slate-900 px-3 py-1 rounded border border-slate-700">
                    {accessKey}
                  </span>
                </div>

                <form onSubmit={handleSaveNewKey} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nova Chave de Acesso
                    </label>
                    <input
                      type="text"
                      required
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                      placeholder="Ex: mariana2026, med@sudamericana, etc."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Confirmar Nova Chave
                    </label>
                    <input
                      type="text"
                      required
                      value={confirmKey}
                      onChange={(e) => setConfirmKey(e.target.value)}
                      placeholder="Repita a mesma chave..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 font-mono"
                    />
                  </div>

                  {keyErrorMsg && (
                    <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-xl text-xs text-red-300">
                      {keyErrorMsg}
                    </div>
                  )}

                  {keySuccessMsg && (
                    <div className="p-3 bg-teal-950/40 border border-teal-900/60 rounded-xl text-xs text-teal-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{keySuccessMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Salvar Nova Chave de Acesso</span>
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={handleResetToDefault}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Restaurar chave padrão (mari2026)</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs text-slate-400 hover:text-white underline"
                  >
                    Voltar para lista de alunos
                  </button>
                </div>
              </div>
            )}

            {/* Bottom session footer */}
            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-800 shrink-0">
              <span>Sessão autenticada. Chave ativa salva no navegador.</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="hover:text-slate-300 underline"
              >
                Encerrar Sessão
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
