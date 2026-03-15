"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Rocket, Code, AlertTriangle, CheckCircle2, Network, Database, Shield, Cpu } from 'lucide-react';
import { projects } from '@/lib/data/projects';
import { notFound, useParams } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const params = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  const project = projects.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

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
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10" ref={containerRef}>
      {/* Breadcrumb */}
      <nav className="animate-up flex items-center gap-2 mb-8 text-sm text-slate-500 font-mono">
        <Link href="/projects" className="hover:text-primary">projects</Link>
        <ChevronRight className="size-4" />
        <span className="text-slate-300">{project.id}</span>
      </nav>

      {/* Hero */}
      <section className="animate-up relative rounded-2xl overflow-hidden mb-16 border border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            className="object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        
        <div className="relative z-20 p-8 lg:p-16 flex flex-col lg:flex-row justify-between items-end gap-10 min-h-[500px]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 tracking-widest uppercase font-mono">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              Full-Stack Development
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-none text-white font-display">{project.title}</h2>
            <p className="text-xl text-slate-300 mb-8 font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.links.live && (
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                  <Rocket className="size-5" /> Live Demo
                </Link>
              )}
              {project.links.github && (
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold border border-white/10 hover:bg-slate-800 transition-colors">
                  <Code className="size-5" /> Source Code
                </Link>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-80 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase text-slate-500 font-mono mb-2 tracking-tighter">My Role</p>
                <p className="text-lg font-bold text-white">Lead Full-Stack Engineer</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate-500 font-mono mb-2 tracking-tighter">Timeline</p>
                <p className="text-lg font-bold text-white">Jan 2024 — Present</p>
              </div>
              <div>
                <p className="text-xs uppercase text-slate-500 font-mono mb-2 tracking-tighter">Technologies</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="animate-up grid lg:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-red-400 size-6" />
            <h3 className="text-2xl font-bold text-white font-display">The Challenge</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            {project.details.problem}
          </p>
          <ul className="space-y-3 font-mono text-sm text-slate-400">
            {project.details.problemPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-500">0{index + 1}.</span> {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-primary size-6" />
            <h3 className="text-2xl font-bold text-white font-display">The Solution</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6">
            {project.details.solution}
          </p>
          <ul className="space-y-3 font-mono text-sm text-slate-400">
            {project.details.solutionPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">0{index + 1}.</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Metrics */}
      <section className="animate-up mb-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { value: '65%', label: 'Latency Reduction' },
          { value: '4.2M', label: 'Requests / Day' },
          { value: '99.9%', label: 'System Uptime' },
          { value: '12x', label: 'Scalability Boost' }
        ].map((stat, i) => (
          <div key={i} className="bg-black/40 backdrop-blur-md p-8 rounded-2xl text-center border border-white/10">
            <p className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2 tracking-tighter font-display">{stat.value}</p>
            <p className="text-xs uppercase text-slate-500 font-mono tracking-widest">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Technical Deep Dive */}
      <section className="animate-up mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-3xl font-bold mb-2 text-white font-display">Technical Deep Dive</h3>
            <p className="text-slate-400">Architectural breakdown of the Nexus core engine.</p>
          </div>
          <div className="text-primary font-mono text-sm">
            {`// system_architecture_v2.0.json`}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.details.features.map((feature, index) => {
            const icons = [Network, Cpu, Database, Shield];
            const colors = ['primary', 'secondary', 'cyan-400', 'violet-400'];
            const IconComponent = icons[index % icons.length];
            const colorClass = colors[index % colors.length];
            
            return (
              <div key={feature.title} className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-all group">
                <div className={`size-12 rounded-xl bg-${colorClass}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`text-${colorClass} size-6`} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white font-display">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
