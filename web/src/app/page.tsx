import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/lorycantelli12/projeto-multi-agentes/main/squads/lancamentos-squad/LAUNCH-STATUS.md';

async function getMarkdownContent() {
  const res = await fetch(GITHUB_RAW_URL, {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    return '# Error loading status\n\nCould not fetch launch status.';
  }

  return res.text();
}

const teams = [
  {
    name: 'Liderança',
    icon: '👑',
    color: 'from-yellow-500 to-amber-600',
    agents: [
      { id: 'dono', name: 'Dono', role: 'Decisões finais e aprovações' },
      { id: 'cmo', name: 'CMO', role: 'Estratégia geral do lançamento' },
      { id: 'status-tracker', name: 'Status Tracker', role: 'Atualiza progresso' },
    ]
  },
  {
    name: 'Metodologias',
    icon: '🎯',
    color: 'from-red-500 to-rose-600',
    agents: [
      { id: 'erico-rocha', name: 'Erico Rocha', role: 'PLF - Fórmula de Lançamento' },
      { id: 'tales-perini', name: 'Tales Perini', role: 'Lançamento Meteórico' },
      { id: 'leandro-ferrari', name: 'Leandro Ferrari', role: 'Corredor Polonês' },
      { id: 'micha-menezes', name: 'Micha Menezes', role: 'Lançamento Semente' },
      { id: 'priscila-zillo', name: 'Priscila Zillo', role: 'Lançamento Perpétuo' },
      { id: 'wendell-carvalho', name: 'Wendell Carvalho', role: 'High Ticket' },
      { id: 'icaro-carvalho', name: 'Ícaro de Carvalho', role: 'Novo Mercado' },
    ]
  },
  {
    name: 'Redes Sociais',
    icon: '📱',
    color: 'from-pink-500 to-fuchsia-600',
    agents: [
      { id: 'paulo-cuenca', name: 'Paulo Cuenca', role: 'Estratégia de conteúdo' },
      { id: 'reels-creator', name: 'Reels Creator', role: 'Roteiros de Reels' },
      { id: 'stories-manager', name: 'Stories Manager', role: 'Sequências de Stories' },
      { id: 'community-manager', name: 'Community Manager', role: 'Engajamento' },
      { id: 'social-scheduler', name: 'Social Scheduler', role: 'Calendário editorial' },
    ]
  },
  {
    name: 'Criativo',
    icon: '🎨',
    color: 'from-purple-500 to-violet-600',
    agents: [
      { id: 'art-director', name: 'Art Director', role: 'Direção criativa' },
      { id: 'designer-ads', name: 'Designer Ads', role: 'Criativos para anúncios' },
      { id: 'video-producer', name: 'Video Producer', role: 'Roteiros e produção' },
    ]
  },
  {
    name: 'Copy',
    icon: '✍️',
    color: 'from-blue-500 to-cyan-600',
    agents: [
      { id: 'copy-chief', name: 'Copy Chief', role: 'Estratégia de copy' },
      { id: 'headline-writer', name: 'Headline Writer', role: 'Headlines magnéticas' },
      { id: 'vsl-writer', name: 'VSL Writer', role: 'Vídeos de vendas' },
      { id: 'email-sequences', name: 'Email Sequences', role: 'Sequências de email' },
      { id: 'cpl-writer', name: 'CPL Writer', role: 'Conteúdo pré-lançamento' },
      { id: 'objection-handler', name: 'Objection Handler', role: 'Quebra de objeções' },
      { id: 'urgency-writer', name: 'Urgency Writer', role: 'Escassez e urgência' },
      { id: 'faq-writer', name: 'FAQ Writer', role: 'Perguntas frequentes' },
    ]
  },
  {
    name: 'Tráfego',
    icon: '📊',
    color: 'from-green-500 to-emerald-600',
    agents: [
      { id: 'pedro-sobral', name: 'Pedro Sobral', role: 'Estratégia de tráfego' },
      { id: 'meta-ads-specialist', name: 'Meta Ads', role: 'Facebook e Instagram Ads' },
      { id: 'google-ads-specialist', name: 'Google Ads', role: 'Search e YouTube Ads' },
      { id: 'audience-builder', name: 'Audience Builder', role: 'Públicos e segmentação' },
    ]
  },
  {
    name: 'Email Marketing',
    icon: '📧',
    color: 'from-orange-500 to-amber-600',
    agents: [
      { id: 'email-strategist', name: 'Email Strategist', role: 'Estratégia de email' },
      { id: 'nurture-writer', name: 'Nurture Writer', role: 'Nutrição de leads' },
      { id: 'launch-emails', name: 'Launch Emails', role: 'Emails de lançamento' },
      { id: 'cart-recovery', name: 'Cart Recovery', role: 'Recuperação de carrinho' },
      { id: 'deliverability', name: 'Deliverability', role: 'Entregabilidade' },
    ]
  },
  {
    name: 'LP/Tech',
    icon: '🖥️',
    color: 'from-indigo-500 to-blue-600',
    agents: [
      { id: 'lp-architect', name: 'LP Architect', role: 'Arquitetura de LPs' },
      { id: 'checkout-optimizer', name: 'Checkout Optimizer', role: 'Otimização de checkout' },
      { id: 'automation-builder', name: 'Automation Builder', role: 'Automações' },
      { id: 'integration-specialist', name: 'Integration Specialist', role: 'Integrações' },
      { id: 'tracking-setup', name: 'Tracking Setup', role: 'Pixels e tracking' },
    ]
  },
  {
    name: 'Guardiões',
    icon: '🛡️',
    color: 'from-slate-500 to-gray-600',
    agents: [
      { id: 'fiscal', name: 'Fiscal', role: 'Compliance e revisão' },
      { id: 'data-analyst', name: 'Data Analyst', role: 'Análise de dados' },
      { id: 'espiao', name: 'Espião', role: 'Inteligência competitiva' },
    ]
  },
];

export default async function Home() {
  const content = await getMarkdownContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <h1 className="text-xl font-bold text-white">lancamentos-squad</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-400">47 agentes ativos</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8">
          <Link href="#status" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
            📋 Status
          </Link>
          <Link href="#agents" className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg font-medium hover:bg-slate-600">
            👥 Agentes
          </Link>
        </div>

        {/* Status Section */}
        <section id="status" className="mb-12">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
            <article className="prose prose-invert prose-slate max-w-none
              prose-headings:text-slate-100
              prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-700
              prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-100
              prose-code:bg-slate-700/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-emerald-400
              prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg
              prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-800/50 prose-blockquote:rounded-r-lg prose-blockquote:py-1
              prose-table:border-collapse
              prose-th:bg-slate-700/50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-200 prose-th:border prose-th:border-slate-600
              prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-slate-700 prose-td:text-slate-300
              prose-tr:even:bg-slate-800/30
              prose-li:text-slate-300 prose-li:marker:text-slate-500
              prose-hr:border-slate-700
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </article>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            👥 Todos os Agentes
            <span className="text-sm font-normal text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
              47 agentes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.name}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
              >
                {/* Team Header */}
                <div className={`bg-gradient-to-r ${team.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{team.icon}</span>
                    <div>
                      <h3 className="font-bold text-white">{team.name}</h3>
                      <p className="text-sm text-white/80">{team.agents.length} agentes</p>
                    </div>
                  </div>
                </div>

                {/* Agents List */}
                <div className="p-4 space-y-3">
                  {team.agents.map((agent) => (
                    <div
                      key={agent.id}
                      className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center text-sm font-medium text-white">
                        {agent.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white text-sm truncate">
                          @{agent.id}
                        </p>
                        <p className="text-xs text-slate-400 truncate">
                          {agent.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 py-8 border-t border-slate-700/50">
          <p>Powered by lancamentos-squad</p>
          <a
            href="https://github.com/lorycantelli12/projeto-multi-agentes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
