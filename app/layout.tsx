import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'DevPortfolio | Full-Stack Engineering',
  description: 'Full-Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-black text-slate-100 antialiased selection:bg-primary/30 overflow-x-hidden`} suppressHydrationWarning>
        <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(34,211,238,0.07)_1px,transparent_0)] bg-[length:24px_24px] z-0 opacity-40"></div>
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12)_0%,transparent_70%)] z-0"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12)_0%,transparent_70%)] z-0 opacity-30"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
