import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CureConnect",
    description: "A comprehensive healthcare platform bridging the gap between patients and doctors with secure Razorpay payment integration for consultations.",
    tags: ["MERN Stack", "Razorpay", "Tailwind CSS", "Redux"],
    featured: true,
  },
  {
    title: "OutfitX",
    description: "Modern e-commerce clothing store providing a seamless shopping experience with Stripe checkout, user authentication, and inventory tracking.",
    tags: ["MERN Stack", "Stripe API", "JWT", "React Context"],
    featured: true,
  },
  {
    title: "Haven Heights Real Estate",
    description: "Property listing and management platform featuring advanced search filters, interactive maps, and detailed property showcases.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Mapbox"],
    featured: false,
  },
  {
    title: "Inventory Management System",
    description: "Enterprise-grade inventory tracking solution with real-time stock updates, automated alerts, and robust state management.",
    tags: ["React", "Redux", "Node.js", "PostgreSQL", "Charts"],
    featured: true,
  },
  {
    title: "Job Portal App",
    description: "Dedicated platform for job seekers and employers to connect, featuring application tracking and resume parsing.",
    tags: ["MERN Stack", "Multer", "REST API"],
    featured: false,
  },
  {
    title: "Nephroplus OCR Hackathon",
    description: "Innovative document digitization tool extracting structured data from medical records using optical character recognition.",
    tags: ["Python", "OCR (Tesseract)", "Flask", "OpenCV"],
    featured: false,
  },
  {
    title: "Online Problem Reporting",
    description: "Civic tech platform enabling citizens to report local infrastructure issues directly to municipal authorities.",
    tags: ["Node.js", "HTML5", "CSS3", "JavaScript"],
    featured: false,
  },
  {
    title: "Alumni Network",
    description: "Social networking platform specifically designed for university alumni to foster professional connections and mentorship.",
    tags: ["MERN Stack", "Socket.io", "Cloudinary"],
    featured: false,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-6" />
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent work showcasing problem-solving skills, full-stack capabilities, and attention to detail.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2 rounded-full border-white/10 hover:bg-white/5">
            <Github size={18} /> View GitHub Profile
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-full flex flex-col bg-background rounded-3xl border border-white/5 overflow-hidden hover:border-primary/30 transition-colors duration-500"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/5 transition-colors duration-500 pointer-events-none" />
              
              <div className="p-8 flex-1 flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-secondary text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 shadow-sm">
                    <FolderGit2 size={28} />
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="items-center gap-2 rounded-full border-white/10 hover:bg-white/5">
            <Github size={18} /> View Full GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
