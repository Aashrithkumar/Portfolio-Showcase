import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@assets/90=1aaaaaaaaaa_copy~2_1772780348270.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-10" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Terminal size={14} />
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Aashrith Kumar</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-muted-foreground font-medium">
              Junior Software Developer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Driven and detail-oriented developer specializing in building exceptional digital experiences. I transform complex problems into elegant, efficient, and scalable solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" asChild className="h-14 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-white/10 hover:bg-white/5 transition-all duration-300">
                <Download className="mr-2 w-5 h-5 text-muted-foreground" /> Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md mx-auto aspect-square"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl transform rotate-6" />
            <div className="absolute inset-0 rounded-3xl bg-card border border-white/10 shadow-2xl overflow-hidden">
              <img 
                src={profilePic} 
                alt="Myakala Aashrith Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
