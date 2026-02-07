import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default async function Home() {
  const content = await getMarkdownContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-400">Live Status</span>
          </div>
        </header>

        <main className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
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
        </main>

        <footer className="mt-8 text-center text-sm text-slate-500">
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
