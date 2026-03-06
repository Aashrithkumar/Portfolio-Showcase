import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Cloud, Zap, Wrench, Sparkles, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    skills: ["Java", "JavaScript", "Python", "C"]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "UI/UX Design"]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-green-400",
    bg: "bg-green-400/10",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    skills: ["AWS Amplify", "Netlify", "Vercel", "Render", "CI/CD"]
  },
  {
    title: "Automation",
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    skills: ["n8n Automation", "Zoho CRM", "Google Calendar API"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-red-400",
    bg: "bg-red-400/10",
    skills: ["Git", "GitHub", "Postman"]
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    skills: ["ChatGPT", "Cursor AI", "GitHub Copilot", "Claude Code", "Replit AI"]
  },
  {
    title: "Core Strengths",
    icon: Target,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    skills: ["Problem Solving", "OOP", "Workflow Automation", "API Integration"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, tools, and languages I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.bg} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-muted-foreground font-medium hover:text-white hover:bg-white/10 hover:border-white/20 cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
