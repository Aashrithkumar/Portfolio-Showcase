import { motion } from "framer-motion";
import { ArrowDown, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@assets/90=1aaaaaaaaaa_copy~2_1772780348270.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-10" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start gap-5 text-left"
          >
            <p className="text-emerald-400 text-lg font-medium">Hello, I'm</p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Myakala Aashrith <br />
              <span className="gradient-text">Kumar</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Junior Software Developer
            </h2>



            <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
              Driven and detail-oriented developer specializing in building exceptional digital experiences. I transform complex problems into elegant, efficient, and scalable solutions.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+918121066315" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone size={16} className="text-emerald-400" />
                <span>+91 8121066315</span>
              </a>
              <a href="mailto:aashrithkumar2003@gmail.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail size={16} className="text-emerald-400" />
                <span>aashrithkumar2003@gmail.com</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" asChild className="h-12 px-8 rounded-full text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 rounded-full text-base font-semibold border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300">
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto flex items-center justify-center mt-20"
          >
            {/* Circular Profile Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/20 to-emerald-600/20 blur-2xl scale-110" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 scale-105" />
              {/* Profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary shadow-2xl shadow-emerald-500/10">
                <img 
                  src={profilePic} 
                  alt="Myakala Aashrith Kumar" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <a href="#about" className="animate-bounce-slow text-muted-foreground hover:text-emerald-400 transition-colors">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
