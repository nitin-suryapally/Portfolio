"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { Terminal, Download, Sparkles, History, Mail, Globe, MapPin } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
      {/* Hero */}
      <section className="animate-up flex flex-col md:flex-row gap-12 items-center mb-24">
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 blur-2xl opacity-20"></div>
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black">
            <Image 
              src="/assets/images/nitin-portfolio.png" 
              alt="Nitin Suryapally" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-xs font-mono font-bold tracking-wider uppercase">Open for new opportunities</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Nitin <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Suryapally</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-display font-light mb-8 max-w-2xl">
            Full-Stack Engineer focused on <span className="text-white font-medium">Quality</span>, <span className="text-white font-medium">Speed</span>, and <span className="text-white font-medium">Scalability</span>.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="bg-black/40 backdrop-blur-md border border-white/5 px-6 py-3 rounded-xl">
              <p className="text-slate-500 text-xs font-mono uppercase mb-1">Experience</p>
              <p className="text-2xl font-bold font-display text-white">1+ Year</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/5 px-6 py-3 rounded-xl">
              <p className="text-slate-500 text-xs font-mono uppercase mb-1">Projects</p>
              <p className="text-2xl font-bold font-display text-white">10+</p>
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/5 px-6 py-3 rounded-xl">
              <p className="text-slate-500 text-xs font-mono uppercase mb-1">Location</p>
              <p className="text-2xl font-bold font-display text-white">Pune, India</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md border border-white/5 px-6 py-3 rounded-xl flex items-center justify-center">
              <a href="/Nitin-Suryapally.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold font-mono hover:text-white transition-colors">
                <Download className="size-5" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Skills */}
      <section className="animate-up grid md:grid-cols-3 gap-8 mb-24">
        <div className="col-span-2">
          <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
            <Sparkles className="text-primary size-8" />
            Narrative
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I specialize in building high-performance web applications that don&apos;t just work—they excel. My engineering philosophy is rooted in <strong className="text-white">maintainable architectures</strong> and <strong className="text-white">type-safe development</strong>.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            From contributing to production-ready web applications to developing scalable SaaS products, I bridge the gap between complex business requirements and elegant technical solutions.
          </p>
        </div>
        
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
          <h3 className="font-display font-bold mb-4 text-slate-500 uppercase text-xs tracking-widest">Top Proficiency</h3>
          <ul className="space-y-4 font-mono text-sm">
            {[
              { name: 'TypeScript / Next.js', val: '92%' },
              { name: 'React / Tailwind CSS', val: '95%' },
              { name: 'MERN Stack', val: '90%' },
              { name: 'Framer Motion / GSAP', val: '85%' },
            ].map(skill => (
              <li key={skill.name} className="flex items-center justify-between">
                <span className="text-slate-200">{skill.name}</span>
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: skill.val }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="animate-up mb-24">
        <h2 className="font-display text-3xl font-bold mb-12 flex items-center gap-3">
          <History className="text-secondary size-8" />
          Career Timeline
        </h2>
        
        <div className="relative space-y-12">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block opacity-50"></div>
          
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 md:text-right pr-12 hidden md:block">
              <span className="font-mono text-primary font-bold">2024 — PRESENT</span>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10 hidden md:block"></div>
            <div className="md:w-1/2">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                <span className="font-mono text-primary font-bold md:hidden block mb-2">2024 — PRESENT</span>
                <h3 className="text-xl font-bold font-display mb-1 text-white">Software Developer</h3>
                <p className="text-slate-400 mb-4 font-medium">Skalehigh</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">Developing and maintaining high-performance web applications and internal tools using modern tech stacks.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">React</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">TypeScript</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 md:text-right pr-12 hidden md:block preorder-last">
              <span className="font-mono text-secondary font-bold">JAN 2024 — JUN 2024</span>
            </div>
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-secondary z-10 hidden md:block"></div>
            <div className="md:w-1/2 md:ml-auto">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors">
                <span className="font-mono text-secondary font-bold md:hidden block mb-2">JAN 2024 — JUN 2024</span>
                <h3 className="text-xl font-bold font-display mb-1 text-white">Software Engineering Intern</h3>
                <p className="text-slate-400 mb-4 font-medium">Quoppo Private Limited • Pune, India</p>
                <ul className="text-slate-300 text-sm mb-4 leading-relaxed list-disc list-inside space-y-1">
                  <li>Contributed to 8 full-stack projects across diverse domains, delivering production-ready applications.</li>
                  <li>Developed MERN and Next.js applications with Tailwind CSS, Turborepo, and Framer for responsive UIs.</li>
                  <li>Collaborated on 3 SaaS-based products from concept to deployment, focusing on performance.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">Next.js</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">Tailwind</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/10 font-mono">Turborepo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
