import { ExternalLink, Code2, Zap, Shield, Globe, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import damiapis from '@/assets/project-damiapis.jpg';

const endpoints = [
  { method: 'GET', path: '/v1/chat', description: 'AI Chat completion' },
  { method: 'POST', path: '/v1/generate/image', description: 'Image generation' },
  { method: 'GET', path: '/v1/weather/{city}', description: 'Real-time weather data' },
  { method: 'POST', path: '/v1/search', description: 'Advanced search query' },
  { method: 'GET', path: '/v1/tts', description: 'Text-to-speech voice' },
  { method: 'POST', path: '/v1/review', description: 'File/code AI review' },
];

const methodColor: Record<string, string> = {
  GET: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  POST: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  PUT: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  DELETE: 'text-red-400 bg-red-400/10 border-red-400/20',
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      className="p-1.5 rounded-md text-white/30 hover:text-white/70 hover:bg-white/8 transition-all"
      aria-label="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function ApiSection() {
  return (
    <section id="api" className="relative py-24">
      <div className="section-divider" />
      <div className="container mx-auto px-4 pt-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-widest text-xs mb-3">Developer Tools</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Dami<span className="gradient-text-purple">APIs</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent mx-auto mb-4" />
          <p className="text-white/50 max-w-2xl mx-auto">
            Powerful REST API endpoints — plug AI, weather, search, image generation & more into your apps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Hero card */}
          <div className="relative rounded-2xl overflow-hidden mb-10 border border-white/10 group">
            <img
              src={damiapis}
              alt="DamiAPIs"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/25 mb-4 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-300 text-xs font-semibold uppercase tracking-widest">Live API</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">damiapis.zone.id</h3>
              <p className="text-white/60 max-w-md mb-6 text-sm leading-relaxed">
                Open developer API hub. Access AI chat, image generation, weather, search and more with simple REST calls.
              </p>
              <Button
                size="lg"
                className="w-fit bg-white text-black hover:bg-white/90 font-bold"
                onClick={() => window.open('https://damiapis.zone.id', '_blank')}
              >
                Explore Docs
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Features strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { icon: Zap, label: 'Fast Response', sub: '< 200ms avg' },
              { icon: Shield, label: 'Secure', sub: 'API key auth' },
              { icon: Globe, label: 'REST + JSON', sub: 'Standard protocol' },
              { icon: Code2, label: 'Well Documented', sub: 'Swagger / OpenAPI' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="glass-card rounded-xl p-4 text-center glass-card-hover card-3d">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-400/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-purple-300" />
                </div>
                <p className="text-white/80 text-sm font-semibold">{label}</p>
                <p className="text-white/40 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          {/* Endpoints table */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
            <div className="px-6 py-4 border-b border-white/8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <code className="text-xs text-white/40 font-mono">api.damiapis.zone.id</code>
              </div>
              <span className="text-xs text-white/30 uppercase tracking-widest">Endpoints</span>
            </div>

            <div className="divide-y divide-white/5">
              {endpoints.map((ep) => (
                <div key={ep.path} className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/3 transition-colors group">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border font-mono flex-shrink-0 ${methodColor[ep.method] ?? 'text-white/60 bg-white/5 border-white/10'}`}>
                    {ep.method}
                  </span>
                  <code className="text-sm text-white/70 font-mono flex-1 group-hover:text-white transition-colors">
                    {ep.path}
                  </code>
                  <span className="text-xs text-white/35 flex-shrink-0 hidden sm:block">{ep.description}</span>
                  <CopyButton text={`https://api.damiapis.zone.id${ep.path}`} />
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-white/30">
                Base URL: <code className="text-purple-300/70 font-mono">https://api.damiapis.zone.id</code>
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-400/25 text-purple-300/70 hover:bg-purple-400/8 hover:text-purple-200 bg-transparent text-xs"
                onClick={() => window.open('https://damiapis.zone.id', '_blank')}
              >
                Full Documentation <ExternalLink className="ml-1.5 w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
