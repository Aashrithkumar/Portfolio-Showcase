import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-wider">AASHRITH</span>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              Building robust digital experiences with clean code and modern technologies.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/aashrithkumar2003" },
              { icon: Linkedin, href: "https://linkedin.com/in/aashrith-kumar" },
              { icon: Mail, href: "mailto:aashrithkumar2003@gmail.com" },
              { icon: Twitter, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Myakala Aashrith Kumar. All rights reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
