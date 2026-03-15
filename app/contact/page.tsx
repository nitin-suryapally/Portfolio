"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Calendar, Github, Mail, Linkedin, ArrowRight, Terminal, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.animate-up',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    // Add Web3Forms Access Key - User should replace this with their own key
    formData.append("access_key", "2fa18236-1a7c-43b1-ae89-7dcd175395d0"); 
    formData.append("from_name", "Portfolio Contact Form");
    formData.append("subject", `New Message from ${formData.get("name")}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16" ref={containerRef}>
      {/* Hero */}
      <section className="animate-up text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Online // Ready for Input
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black mb-6 leading-tight">
          Let&apos;s build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">exceptional.</span>
        </h1>
        <p className="text-xl text-slate-400 font-light">
          Whether you need a scalable architecture, a high-performance web app, or a technical consultation, I&apos;m ready to help you engineer the future.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Direct Access Modules */}
        <div className="animate-up space-y-6">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <Terminal className="text-primary size-6" />
            Direct Access Modules
          </h2>
          
          <a href="https://calendar.app.google/y9vHETsvvtdmDNaZ9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Calendar className="size-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white font-display">Schedule a Call</h3>
                <p className="text-sm text-slate-400 font-mono">Google Calendar</p>
              </div>
            </div>
            <ArrowRight className="text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all size-5" />
          </a>
          
          <a href="mailto:suryapallynitin04@gmail.com?subject=Project Inquiry" className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 hover:bg-secondary/5 transition-all group">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Mail className="size-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white font-display">Direct Email</h3>
                <p className="text-sm text-slate-400 font-mono">suryapallynitin04@gmail.com</p>
              </div>
            </div>
            <ArrowRight className="text-slate-500 group-hover:text-secondary group-hover:translate-x-1 transition-all size-5" />
          </a>
          
          <div className="grid grid-cols-2 gap-6">
            <a href="https://github.com/SuryapallyNitin" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all group">
              <Github className="size-8 text-slate-400 group-hover:text-white mb-3 transition-colors" />
              <span className="font-mono text-sm text-slate-300">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/nitin-suryapally" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A66C2]/50 transition-all group">
              <Linkedin className="size-8 text-slate-400 group-hover:text-[#0A66C2] mb-3 transition-colors" />
              <span className="font-mono text-sm text-slate-300">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-up bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <h2 className="font-display text-2xl font-bold mb-6 text-white">Initialize Communication</h2>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="size-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Payload Transmitted</h3>
              <p className="text-slate-400 max-w-xs">Connection established. Expect a response in your sub-space frequency shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-primary font-mono text-sm border-b border-primary/30 hover:border-primary transition-all"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Project Type</label>
                <select 
                  name="project_type"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm appearance-none"
                >
                  <option value="fullstack" className="bg-[#1a1a1a]">Full-Stack Development</option>
                  <option value="frontend" className="bg-[#1a1a1a]">Frontend Architecture</option>
                  <option value="backend" className="bg-[#1a1a1a]">Backend Systems</option>
                  <option value="consulting" className="bg-[#1a1a1a]">Technical Consulting</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono text-sm resize-none"
                  placeholder="Describe your project requirements..."
                ></textarea>
              </div>

              {error && (
                <p className="text-red-400 text-sm font-mono">{error}</p>
              )}
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-primary transition-colors flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Transmit Payload
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      
      {/* Terminal Status Area */}
      <div className="animate-up bg-[#0a0a0a] border border-white/10 rounded-xl p-4 font-mono text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-primary">&gt;</span>
          <span>SYSTEM_STATUS: <span className="text-emerald-400">OPTIMAL</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: 24ms</span>
          <span>UPTIME: 99.99%</span>
        </div>
      </div>
    </div>
  );
}
