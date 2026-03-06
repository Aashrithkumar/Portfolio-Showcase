import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    school: "Neil Gogte Institute Of Technology",
    year: "Graduating 2024",
    location: "Hyderabad",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Narayana Junior College",
    year: "Completed 2020",
    location: "Hyderabad",
  },
  {
    degree: "High School",
    school: "Slate The School",
    year: "Completed 2018",
    location: "Hyderabad",
  }
];

const experience = [
  {
    title: "Project Intern",
    company: "Bharat Dynamics Limited",
    period: "2023 - Present",
    location: "Hyderabad",
    description: "Assisted in software development lifecycle, contributing to core internal tools, optimizing database queries, and ensuring code quality through extensive testing.",
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:to-transparent">
              {experience.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-emerald-500 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-emerald-500/30 transition-all shadow-lg">
                    <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                    <h5 className="text-emerald-400 font-medium mb-3">{item.company}</h5>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {item.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 border-l-2 border-border/50 pl-6">
              {education.map((item, i) => (
                <div key={i} className="relative before:absolute before:w-3 before:h-3 before:bg-emerald-500 before:rounded-full before:-left-[1.95rem] before:top-2 before:ring-4 before:ring-background hover:before:scale-125 before:transition-transform">
                  <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:border-emerald-500/30 transition-all shadow-lg group">
                    <h4 className="font-bold text-lg text-foreground mb-1 group-hover:text-emerald-400 transition-colors">{item.degree}</h4>
                    <h5 className="text-muted-foreground font-medium mb-3">{item.school}</h5>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/50"><Calendar size={14} /> {item.year}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
