export type SubjectType = 'Histologia' | 'Embriologia' | 'Microbiologia' | 'Geral';

export interface Lead {
  id: string;
  name: string;
  whatsapp: string;
  subject: SubjectType;
  university?: string;
  period?: string;
  notes?: string;
  createdAt: string;
  status: 'Novo' | 'Em Contato' | 'Aula Agendada' | 'Finalizado';
}

export interface Testimonial {
  id: string;
  studentName: string;
  university: string;
  subject: SubjectType;
  quote: string;
  fullScreenshotUrl: string;
  thumbnailUrl: string;
  highlightText: string;
  grade?: string;
}

export interface HistologySlide {
  id: string;
  title: string;
  subject: SubjectType;
  organ: string;
  staining: string;
  magnification: string;
  imageUrl: string;
  keyFeatures: string[];
  mariTip: string;
  differentialDiagnosis: string;
  hotspots: {
    id: string;
    x: number; // percentage
    y: number; // percentage
    label: string;
    description: string;
  }[];
}

export interface MentorshipPlan {
  id: string;
  title: string;
  badge?: string;
  idealFor: string;
  description: string;
  features: string[];
  format: 'Individual' | 'Dupla' | 'Grupo';
  popular?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Aulas' | 'Metodologia' | 'Pagamento e Agendamento';
}

export interface AnalysisIssue {
  id: string;
  severity: 'Crítico' | 'Alerta' | 'Melhoria UX';
  category: 'Código & Estrutura' | 'Conversão & Vendas' | 'Design & UX' | 'Pedagogia Médica';
  title: string;
  description: string;
  beforeSnippet: string;
  afterSolution: string;
  impact: string;
}
