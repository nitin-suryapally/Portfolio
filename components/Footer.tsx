import { Globe, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-sm py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="size-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
              <span className="font-bold text-xs">DP</span>
            </div>
            <h2 className="text-lg font-bold font-display">DevPortfolio</h2>
          </div>
          <p className="text-slate-400 font-mono text-xs">DESIGNED & ENGINEERED BY DEV // 2026</p>
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 text-primary">
            <Globe className="size-5" />
          </Link>
          <Link href="/contact" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 text-primary">
            <Mail className="size-5" />
          </Link>
          <Link href="/about" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors border border-white/5 text-primary">
            <FileText className="size-5" />
          </Link>
        </div>
        
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest text-center md:text-right">
          Built with React & Tailwind<br/>
          Deployed on Vercel Edge
        </div>
      </div>
    </footer>
  );
}
