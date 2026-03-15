"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Database, Server, Layers, Box, Cloud, Terminal, TrendingUp, Package, Github, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo('.hero-element', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );

      // Stack Marquee Animation
      gsap.to('.marquee-content', {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });

      // Stats Animation
      gsap.fromTo('.stat-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          }
        }
      );

      // Projects Animation
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 75%',
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-24 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto min-h-[80vh]">
        <div className="flex-1 space-y-8">
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          
          <h1 className="hero-element text-5xl lg:text-7xl font-black leading-none tracking-tighter font-display">
            Full-Stack <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Developer</span>
          </h1>
          
          <div className="hero-element flex flex-col gap-4 max-w-xl">
            <p className="text-slate-400 text-lg leading-relaxed font-mono">
              <span className="text-primary font-bold">&gt; Next.js | MERN | TypeScript</span><br/>
              Building high-performance, scalable web applications with a focus on user experience and engineering excellence.
            </p>
          </div>
          
          <div className="hero-element flex flex-wrap gap-4 pt-4">
            <Link href="/contact" className="bg-primary text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform group">
              Book a Call
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              View Projects
            </Link>
          </div>
        </div>
        
        <div className="hero-element flex-1 w-full relative">
          <div className="relative z-10 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative group border border-white/5">
              <Image 
                src="https://picsum.photos/seed/dashboard/800/450" 
                alt="Dashboard" 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono text-primary mb-1">FEATURED PROJECT</p>
                  <h3 className="text-xl font-bold">NeuralMetrics Dashboard</h3>
                </div>
                <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono text-white">
                  v.2.4.0
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -top-6 -right-6 size-24 border border-primary/20 rounded-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
            <div className="size-16 border-2 border-dashed border-secondary/30 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section ref={stackRef} className="w-full py-12 border-y border-white/5 bg-black/30 backdrop-blur-md overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.3em]">System Stack // Technology</h2>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="marquee-content flex items-center gap-8 px-4 w-max">
            {/* Double the items for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Terminal className="text-primary size-5" />
                  <span className="font-mono text-sm">Next.js</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Layers className="text-primary size-5" />
                  <span className="font-mono text-sm">React</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Database className="text-primary size-5" />
                  <span className="font-mono text-sm">MongoDB</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Code className="text-primary size-5" />
                  <span className="font-mono text-sm">TypeScript</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Box className="text-primary size-5" />
                  <span className="font-mono text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Cloud className="text-primary size-5" />
                  <span className="font-mono text-sm">AWS</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5">
                  <Server className="text-primary size-5" />
                  <span className="font-mono text-sm">Docker</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section ref={statsRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Package className="size-16 text-white" />
            </div>
            <p className="text-slate-400 font-mono text-sm mb-2">Shipped Products</p>
            <h4 className="text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">10+</h4>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <TrendingUp className="size-4" />
              +20% GROWTH
            </div>
          </div>
          
          <div className="stat-card bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Github className="size-16 text-white" />
            </div>
            <p className="text-slate-400 font-mono text-sm mb-2">GitHub Contributions</p>
            <h4 className="text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">2.5k+</h4>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <TrendingUp className="size-4" />
              +15% ACTIVITY
            </div>
          </div>
          
          <div className="stat-card bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="size-16 text-white" />
            </div>
            <p className="text-slate-400 font-mono text-sm mb-2">Years Experience</p>
            <h4 className="text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">4+</h4>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <TrendingUp className="size-4" />
              100% SUCCESS RATE
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">ENGINEERED SOLUTIONS</h2>
            <h3 className="text-4xl font-bold font-display">Featured Projects</h3>
          </div>
          <Link href="/projects" className="text-primary font-mono text-sm hover:underline hidden sm:block">
            VIEW_ALL_REPOS_//
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.filter(p => p.id === 'chillapply' || p.id === 'drone-sports').map((project, idx) => (
             <div key={project.id} className="project-card group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity ${idx === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'}`}></div>
                <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 transition-transform duration-500">
                  <div className="aspect-video bg-black relative overflow-hidden">
                    <Image 
                      src={project.image || "https://picsum.photos/seed/fallback/800/450"} 
                      alt={project.title || "Project Image"} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Link href={`/projects/${project.id}`} className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                        <ArrowRight className="size-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold font-display">{project.title}</h4>
                        <p className="text-slate-400 font-mono text-sm mt-1 line-clamp-1">{project.description}</p>
                      </div>
                      <div className="text-right whitespace-nowrap">
                        <p className="text-primary font-mono text-xs uppercase text-[10px] tracking-widest">METRIC</p>
                        <p className="text-white font-mono text-sm">{project.metrics}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {project.tags?.slice(0,4).map(tag => (
                         <span key={tag} className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[10px] font-mono text-slate-300 uppercase">{tag}</span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}
