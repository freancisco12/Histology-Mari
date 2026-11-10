import { Lead, Testimonial, HistologySlide, MentorshipPlan, FAQItem, AnalysisIssue } from '../types';

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Lucas Ferreira',
    whatsapp: '+55 67 99214-5582',
    subject: 'Histologia',
    university: 'Universidad Sudamericana',
    period: '2º Semestre',
    notes: 'Precisa treinar lâminas de epitélio e tecido ósseo para a prova prática na próxima semana.',
    createdAt: '2026-11-08 14:32',
    status: 'Novo'
  },
  {
    id: 'lead-2',
    name: 'Camila Santos Rocha',
    whatsapp: '+55 45 99876-1234',
    subject: 'Embriologia',
    university: 'Universidad Central del Paraguay',
    period: '1º Ano',
    notes: 'Dúvidas em arcos faríngeos e dobramento embrionário lateral e cefalocaudal.',
    createdAt: '2026-11-09 09:15',
    status: 'Em Contato'
  },
  {
    id: 'lead-3',
    name: 'Guilherme Albuquerque',
    whatsapp: '+55 11 98712-4321',
    subject: 'Microbiologia',
    university: 'UNIGRAN',
    period: '3º Semestre',
    notes: 'Preparação intensiva para prova teórica sobre cocos Gram-positivos e antibiogramas.',
    createdAt: '2026-11-09 11:40',
    status: 'Aula Agendada'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Acadêmico de Medicina',
    university: 'Universidad Sudamericana - PJC',
    subject: 'Histologia',
    quote: 'Você faz a histologia ser um pouco melhor! As lâminas finalmente fizeram sentido depois da sua explicação com mapa mental.',
    fullScreenshotUrl: 'https://i.postimg.cc/BbtN029X/Captura-de-tela-2026-11-09-163213.png',
    thumbnailUrl: 'https://i.postimg.cc/BbtN029X/Captura-de-tela-2026-11-09-163213.png',
    highlightText: '"Você faz a histologia ser um pouco melhor."',
    grade: 'Aprovado com Destaque'
  },
  {
    id: 'test-2',
    studentName: 'Aluna Monitoria',
    university: 'Universidad Sudamericana - PJC',
    subject: 'Embriologia',
    quote: 'Mas enfim vou focar no meu 10 de embriologia graças a melhor monitora do mundo! Gratidão demais pelo suporte antes da prova.',
    fullScreenshotUrl: 'https://i.postimg.cc/RhqGBw5W/Captura-de-tela-2026-11-09-163225.png',
    thumbnailUrl: 'https://i.postimg.cc/RhqGBw5W/Captura-de-tela-2026-11-09-163225.png',
    highlightText: '"Vou focar no meu 10 de embriologia graças a melhor monitora do mundo."',
    grade: 'Nota 10/10'
  }
];

export const HISTOLOGY_SLIDES: HistologySlide[] = [
  {
    id: 'slide-trachea',
    title: 'Epitélio Pseudoestratificado Ciliado (Traqueia)',
    subject: 'Histologia',
    organ: 'Sistema Respiratório (Traqueia)',
    staining: 'H.E. (Hematoxilina & Eosina)',
    magnification: '400x',
    imageUrl: 'https://i.postimg.cc/nrMTJqbm/Captura-de-tela-2026-11-09-163300.png',
    keyFeatures: [
      'Núcleos em diferentes alturas dão falsa impressão de estratificação',
      'Todas as células repousam sobre a lâmina basal',
      'Cílios proeminentes na superfície apical para clearance mucociliar',
      'Presença frequente de células caliciformes secretoras de muco'
    ],
    mariTip: 'Na prova prática: se parece estratificado, mas você vê cílios bem evidentes na borda apical e células caliciformes, é PSEUDOESTRATIFICADO ciliado. Estratificado verdadeiro raramente tem cílios!',
    differentialDiagnosis: 'Epitélio Colunar Simples com Microvilosidades (Intestino) ou Urotélio (Bexiga).',
    hotspots: [
      {
        id: 'hs-1',
        x: 48,
        y: 28,
        label: 'Cílios Apicais',
        description: 'Microtúbulos móveis dispostos no arranjo 9+2 que impulsionam o filme de muco.'
      },
      {
        id: 'hs-2',
        x: 62,
        y: 45,
        label: 'Célula Caliciforme',
        description: 'Célula epitelial modificada com aspecto claro ("vazio" no H&E) devido ao muco lavado na técnica.'
      },
      {
        id: 'hs-3',
        x: 35,
        y: 65,
        label: 'Núcleos Basais',
        description: 'Dispostos em múltiplos níveis, criando o aspecto "pseudo" de estratificação.'
      }
    ]
  },
  {
    id: 'slide-embryo',
    title: 'Dobramento Embrionário & Arcos Faríngeos',
    subject: 'Embriologia',
    organ: 'Embrião Humano (4ª Semana)',
    staining: 'Microfotografia & Ilustração Esquemática',
    magnification: 'Visão Panorâmica',
    imageUrl: 'https://i.postimg.cc/prykHKbF/Captura-de-tela-2026-11-09-163254.png',
    keyFeatures: [
      'Fechamento dos neuroporos anterior e posterior',
      'Formação do tubo neural dorsal a partir da placa ectodérmica',
      'Arcos faríngeos visíveis na região cefálica (1º a 4º pares)',
      'Delimitação da cavidade celômica e broto dos membros'
    ],
    mariTip: 'Macete da Mari: Na 4ª semana ocorrem 4 eventos cruciais: 4 arcos faríngeos visíveis, 4 cavidades cardíacas iniciando septação, dobramento tridimensional e fechamento do tubo neural.',
    differentialDiagnosis: 'Diferenciação entre 3ª semana (gastrulação) e 5ª semana (diferenciação avançada dos brotos).',
    hotspots: [
      {
        id: 'hs-4',
        x: 30,
        y: 35,
        label: 'Tubo Neural',
        description: 'Ectoderma invaginado que dará origem ao SNC (cérebro e medula espinhal).'
      },
      {
        id: 'hs-5',
        x: 55,
        y: 50,
        label: '1º Arco Faríngeo (Mandibular)',
        description: 'Origina mandíbula, maxila, martelo, bigorna e músculos da mastigação.'
      }
    ]
  },
  {
    id: 'slide-gram',
    title: 'Coloração de Gram & Morfologia Bacteriana',
    subject: 'Microbiologia',
    organ: 'Esfregaço Bacteriológico',
    staining: 'Método de Gram (Cristal Violeta + Lugol + Álcool + Fucsina)',
    magnification: '1000x (Imersão em Óleo)',
    imageUrl: 'https://i.postimg.cc/mkqj2hBt/Captura-de-tela-2026-11-09-163418.png',
    keyFeatures: [
      'Bactérias Gram-positivas coradas em roxo/azul-escuro (parede espessa de peptidoglicano retém complexo cristal violeta-iodo)',
      'Bactérias Gram-negativas coradas em rosa/vermelho pela fucsina/safranina',
      'Morfologia em cocos isolados, cadeias (Streptococcus) ou cachos (Staphylococcus)',
      'Avaliação da pureza cultural e presença de leucócitos'
    ],
    mariTip: 'Passo crítico na prova prática: A descoloração com álcool-acetona é onde todo mundo erra. Se descolorir demais, Gram-positivo vira rosa falso; se descolorir de menos, Gram-negativo fica azul falso!',
    differentialDiagnosis: 'Bactérias álcool-ácido resistentes (BAAR - Mycobacterium) que exigem Ziehl-Neelsen.',
    hotspots: [
      {
        id: 'hs-6',
        x: 45,
        y: 42,
        label: 'Cocos Gram-positivos',
        description: 'Coloração violeta intensa mantida pela densa trama de peptideoglicano.'
      },
      {
        id: 'hs-7',
        x: 70,
        y: 58,
        label: 'Bacilos Gram-negativos',
        description: 'Tonalidade rosada após contra-coloração com fucsina.'
      }
    ]
  }
];

export const MENTORSHIP_PLANS: MentorshipPlan[] = [
  {
    id: 'plan-single',
    title: 'Aula Particular VIP',
    idealFor: 'Dúvidas urgentes e revisão antes de prova',
    description: '100% individual e personalizada para a sua grade curricular e o estilo de cobrança do seu professor.',
    features: [
      'Sessão individual via Zoom / Google Meet',
      'Foco exato no edital da sua faculdade',
      'Treino prático de lâminas e pegadinhas de prova',
      'Gravação em alta resolução disponibilizada',
      'PDF com mapas mentais da aula'
    ],
    format: 'Individual',
    popular: false
  },
  {
    id: 'plan-combo',
    title: 'Mentoria Semestral Completa',
    badge: 'Mais Escolhido',
    idealFor: 'Garantir aprovação sem desespero de véspera',
    description: 'Acompanhamento contínuo ao longo do semestre com cronograma sincronizado com suas provas.',
    features: [
      'Aulas semanais ao vivo + suporte WhatsApp para dúvidas',
      'Banco exclusivo com +100 lâminas resolvidas e comentadas',
      'Simulados pré-prova cronometrados idênticos às provas práticas',
      'Resumos esquemáticos ilustrados de cada módulo',
      'Garantia de segurança no microscópio'
    ],
    format: 'Individual',
    popular: true
  },
  {
    id: 'plan-group',
    title: 'Grupo de Estudos / Dupla',
    idealFor: 'Amigos ou duplas de laboratório',
    description: 'Estude com seu colega de bancada ou grupo da faculdade dividindo o investimento.',
    features: [
      'Turmas reduzidas (máximo 4 acadêmicos)',
      'Resolução coletiva de casos clínicos e lâminas',
      'Debate de diagnósticos diferenciais',
      'Acesso à comunidade e material compartilhado',
      'Excelente custo-benefício'
    ],
    format: 'Grupo',
    popular: false
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Aulas',
    question: 'Como funciona o atendimento e as aulas EAD?',
    answer: 'As aulas são 100% online ao vivo via Google Meet ou Zoom, com compartilhamento de tela de altíssima qualidade. A Mariana utiliza mesa digitalizadora, atlas digitais de histologia em alta resolução e lousa interativa, explicando cada tecido traço a traço para você entender a histofisiologia e não apenas decorar.'
  },
  {
    id: 'faq-2',
    category: 'Metodologia',
    question: 'As aulas servem apenas para a Universidad Sudamericana ou para outras faculdades?',
    answer: 'Embora a Mariana estude na Sudamericana em Pedro Juan Caballero e conheça a fundo o padrão das universidades da fronteira (UCP, Sudamericana, UPAP), o ciclo básico de Medicina (Histologia Junqueira, Embriologia Moore/Langman, Microbiologia Murray/Jawetz) segue o padrão médico internacional. Alunos de qualquer faculdade do Brasil ou Paraguai se beneficiam igualmente.'
  },
  {
    id: 'faq-3',
    category: 'Aulas',
    question: 'Eu nunca vi uma lâmina no microscópio. Vou conseguir aprender?',
    answer: 'Com certeza! Essa é a maior especialidade da Mari. A metodologia divide a lâmina em 3 passos simples: 1) Identificar o aumento e campo geral (panorâmica); 2) Localizar a luz do órgão e a lâmina basal; 3) Analisar a morfologia nuclear e características de coloração (acidofilia vs basofilia). Com essa técnica, você não fica perdido mesmo diante de lâminas desbotadas ou artefatos de corte.'
  },
  {
    id: 'faq-4',
    category: 'Pagamento e Agendamento',
    question: 'Como faço para agendar meu horário e tirar dúvidas sobre valores?',
    answer: 'Basta clicar no botão "Falar com a Mari no WhatsApp" ou preencher o formulário no site. Você será direcionado diretamente para o WhatsApp pessoal da Mariana, onde poderá informar sua matéria, faculdade e semana da prova para checar as vagas disponíveis na agenda.'
  },
  {
    id: 'faq-5',
    category: 'Metodologia',
    question: 'As aulas ficam gravadas caso eu precise revisar?',
    answer: 'Sim! Todas as sessões particulares são gravadas em nuvem e o link fica disponível para você rever quantas vezes quiser até a data final das suas provas, acompanhado do PDF dos resumos anotados durante a mentoria.'
  }
];

export const AUDIT_ANALYSIS: AnalysisIssue[] = [
  {
    id: 'issue-1',
    severity: 'Crítico',
    category: 'Código & Estrutura',
    title: 'Tag <div> não fechada quebrando a hierarquia do layout',
    description: 'No arquivo original teste_mari.html, na linha 169-173 (seção Sobre a Mariana), uma tag <div class="relative order-2 lg:order-1"> foi aberta para a imagem da Mariana mas não foi fechada antes de <!-- Texto Sobre -->. Isso causa aninhamento inválido no DOM, quebra a responsividade do grid Tailwind e afeta o motor de renderização dos navegadores.',
    beforeSnippet: `<div class="relative order-2 lg:order-1">\n  <div class="absolute inset-0 bg-brand-teal ..."></div>\n  <a href='https://postimages.org/'><img src='...'></a>\n<!-- Texto Sobre -->\n<div class="order-1 lg:order-2 space-y-6">`,
    afterSolution: `Fechamento estrito dos contêineres semânticos com isolamento de componentes React, garantindo que o grid lg:grid-cols-2 funcione perfeitamente tanto no desktop quanto no mobile.`,
    impact: 'Corrige quebra de layout invisível e previne bugs de sobreposição em telas intermediárias (tablets e notebooks).'
  },
  {
    id: 'issue-2',
    severity: 'Crítico',
    category: 'Conversão & Vendas',
    title: 'Links das imagens redirecionando para o site externo postimages.org',
    description: 'Todas as imagens da página (hero, Mariana, lâminas e prints de feedback) estavam envolvidas por <a href="https://postimages.org/" target="_blank">. Se um estudante de medicina clicar em qualquer imagem para ver a lâmina ou o depoimento com mais nitidez, ele é expulso da página de vendas e enviado para um site público de upload de imagens.',
    beforeSnippet: `<a href="https://postimages.org/" target="_blank">\n  <img src="https://i.postimg.cc/mkqj2hBt/...png">\n</a>`,
    afterSolution: `Substituição por um visualizador Lightbox nativo com zoom microscópico e fallbacks resilientes. Ao clicar, o acadêmico amplia a imagem dentro da própria aplicação sem fuga de tráfego.`,
    impact: 'Estanca um vazamento severo de tráfego e mantém a atenção do potencial aluno focada na contratação da mentoria.'
  },
  {
    id: 'issue-3',
    severity: 'Crítico',
    category: 'Conversão & Vendas',
    title: 'Formulário de captura não enviava dados nem abria o WhatsApp',
    description: 'O formulário modal executava apenas e.preventDefault(), ocultava o form e mostrava uma mensagem "Tudo Certo!", sem enviar e-mail, sem salvar em banco e sem redirecionar para a conversa do WhatsApp da Mariana. O lead preenchia os dados e achava que seria contatado, mas o contato se perdia totalmente no vácuo.',
    beforeSnippet: `function handleFormSubmit(e) {\n  e.preventDefault();\n  document.getElementById('leadForm').classList.add('hidden');\n  document.getElementById('modalSuccess').classList.remove('hidden');\n}`,
    afterSolution: `Integração com gerador inteligente de deep link para WhatsApp (api.whatsapp.com/send?phone=...&text=...) contendo o nome do aluno, faculdade e matéria selecionada, com persistência local de leads no Painel Administrativo.`,
    impact: 'Aumenta a conversão imediata de 0% para 100% de contato ativo entre aluno e mentora.'
  },
  {
    id: 'issue-4',
    severity: 'Alerta',
    category: 'Design & UX',
    title: 'Violação de regras de Zero-Pill e Dots pulsantes artificiais',
    description: 'A página continha badges do tipo rounded-full com dots piscando (animate-ping) estáticos no Hero e tags aleatórias, além de borda esquerda assimétrica grossa (border-l-4 border-brand-teal) que transmite visual amador de template Bootstrap.',
    beforeSnippet: `<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border ...">\n  <span class="flex h-2 w-2 rounded-full bg-brand-teal animate-ping"></span>\n  <span>Vagas Abertas</span>\n</div>`,
    afterSolution: `Tipografia editorial limpa com Plus Jakarta Sans, separadores tipográficos sutis (·), hierarquia visual refinada e eliminação completa de elementos piscantes sem significado real.`,
    impact: 'Eleva a percepção de autoridade médica e seriedade acadêmica da mentoria.'
  },
  {
    id: 'issue-5',
    severity: 'Alerta',
    category: 'Design & UX',
    title: 'Ausência de menu de navegação responsivo no Mobile',
    description: 'Na navbar original, os links tinham a classe hidden md:flex, mas não havia botão de menu hambúrguer nem gaveta móvel para smartphones. Alunos acessando pelo celular (que costuma representar mais de 75% do tráfego do Instagram) ficavam sem nenhuma opção de navegação.',
    beforeSnippet: `<nav class="hidden md:flex items-center gap-8 ...">\n  <!-- links sem equivalente mobile -->\n</nav>`,
    afterSolution: `Drawer mobile interativo, fluido e acessível, com botão hambúrguer/fechar e links rápidos para todas as seções e ação direta de agendamento.`,
    impact: 'Melhora drástica na usabilidade para estudantes que chegam pelo Instagram @histology_mari.'
  },
  {
    id: 'issue-6',
    severity: 'Melhoria UX',
    category: 'Pedagogia Médica',
    title: 'Falta de demonstração prática do método na página',
    description: 'A página dizia que Mariana "descomplica lâminas", mas não mostrava nenhuma lâmina interativa para o estudante experimentar na prática como é ter aula com ela antes de comprar.',
    beforeSnippet: `Apenas textos estáticos descritivos sobre lousa digital e atlas.`,
    afterSolution: `Inclusão do simulador interativo "Atlas & Laboratório de Lâminas da Mari", onde o aluno pode clicar em estruturas (cílios, células caliciformes, núcleos), testar seu conhecimento e ler a "Dica de Prova da Mari".`,
    impact: 'Gera o efeito "Uau", quebra a objeção de incerteza pedagógica e demonstra a didática superior da Mariana.'
  }
];
