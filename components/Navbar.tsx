"use client";

import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-5 lg:px-24 bg-black/70 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
      <Link href="/" className="flex items-center gap-3">
        <div className="size-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
          <Terminal className="size-5 font-bold" />
        </div>
        <h2 className="text-xl font-bold tracking-tight font-display hidden sm:block">Dev<span className="text-primary">Portfolio</span></h2>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
        <Link href="/projects" className={clsx("hover:text-primary transition-colors", pathname === '/projects' ? 'text-primary' : 'text-slate-400')}>Projects</Link>
        <Link href="/about" className={clsx("hover:text-primary transition-colors", pathname === '/about' ? 'text-primary' : 'text-slate-400')}>About</Link>
        <Link href="/contact" className={clsx("hover:text-primary transition-colors", pathname === '/contact' ? 'text-primary' : 'text-slate-400')}>Contact</Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Link href="/Nitin-Suryapally.pdf" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded-lg text-sm font-bold font-mono hover:bg-white/10 transition-all hidden sm:block">
          RESUME
        </Link>
        <Link href="/contact" className="bg-primary/10 border border-primary/20 text-primary px-5 py-2 rounded-lg text-sm font-bold font-mono hover:bg-primary hover:text-black transition-all hidden sm:block">
          HIRE_ME
        </Link>
      </div>
    </header>
  );
}
