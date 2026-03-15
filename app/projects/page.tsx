"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowUpRight, Code, LayoutGrid, List, Plus, Zap, Database, Server, Cpu } from 'lucide-react';
import { projects } from '@/lib/data/projects';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 py-12" ref={containerRef}>
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="project-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Operational: {projects.length} Active Projects
            </div>
            <h1 className="project-item font-display text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-none">
              Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Index</span>
            </h1>
            <p className="project-item text-slate-400 text-lg max-w-xl font-light">
              A curated selection of full-stack architectures, high-performance SaaS platforms, and specialized AI integrations.
            </p>
          </div>
          
          <div className="project-item flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-xl">
            <button className="px-4 py-2 rounded-lg bg-white/10 text-primary text-sm font-medium flex items-center gap-2">
              <LayoutGrid className="size-4" /> Grid
            </button>
            <button className="px-4 py-2 rounded-lg text-slate-500 hover:text-slate-300 text-sm font-medium flex items-center gap-2">
              <List className="size-4" /> List
            </button>
          </div>
        </div>

        <div className="project-item flex flex-wrap items-center gap-3 py-6 border-y border-white/5">
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-primary text-black px-5 cursor-pointer shadow-lg shadow-primary/20 transition-all">
            <LayoutGrid className="size-4" />
            <p className="text-sm font-bold leading-normal">All Systems</p>
          </div>
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white/5 border border-white/10 px-5 text-slate-400 hover:text-primary hover:border-primary/50 cursor-pointer transition-all">
            <Code className="size-4" />
            <p className="text-sm font-medium">Next.js</p>
          </div>
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white/5 border border-white/10 px-5 text-slate-400 hover:text-primary hover:border-primary/50 cursor-pointer transition-all">
            <Database className="size-4" />
            <p className="text-sm font-medium">MERN Stack</p>
          </div>
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white/5 border border-white/10 px-5 text-slate-400 hover:text-primary hover:border-primary/50 cursor-pointer transition-all">
            <Cpu className="size-4" />
            <p className="text-sm font-medium">Artificial Intelligence</p>
          </div>
          <div className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-white/5 border border-white/10 px-5 text-slate-400 hover:text-primary hover:border-primary/50 cursor-pointer transition-all">
            <Server className="size-4" />
            <p className="text-sm font-medium">SaaS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="project-item group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="aspect-video w-full bg-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 z-10"></div>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-black/60 backdrop-blur-md text-[10px] font-mono text-primary px-2 py-1 rounded border border-primary/30 uppercase tracking-tighter">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-2">
                  <Link href={`/projects/${project.id}`} className="text-slate-500 hover:text-primary cursor-pointer">
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-1">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Metric</p>
                  <p className="text-sm font-mono text-primary">{project.metrics}</p>
                </div>
                {project.links.live ? (
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center justify-between">
                     <div>
                       <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Live</p>
                       <p className="text-sm font-mono text-secondary">Available</p>
                     </div>
                     <Link href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                        <ArrowUpRight className="size-4"/>
                     </Link>
                  </div>
                ) : (
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Status</p>
                    <p className="text-sm font-mono text-secondary">Internal / NDA</p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono py-1 px-2 rounded bg-white/5 text-slate-400 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="project-item flex flex-col items-center justify-center bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer group">
          <div className="size-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-all">
            <Plus className="size-8" />
          </div>
          <h3 className="font-display text-xl font-bold text-slate-300">Start New Build</h3>
          <p className="text-slate-500 text-sm text-center mt-2 max-w-[200px]">Have an idea? Let&apos;s engineer something groundbreaking.</p>
        </div>
      </div>
    </div>
  );
}
