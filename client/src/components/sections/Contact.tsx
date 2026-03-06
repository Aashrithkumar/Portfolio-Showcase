import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/myknygvy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // silently handle error
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-secondary/20 border border-border/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Email</p>
                    <a href="mailto:aashrithkumar2003@gmail.com" className="text-foreground hover:text-emerald-400 transition-colors font-medium">
                      aashrithkumar2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Phone</p>
                    <a href="tel:+918121066315" className="text-foreground hover:text-emerald-400 transition-colors font-medium">
                      +91 8121066315
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="text-foreground font-medium">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-secondary/20 border border-border/50 rounded-2xl p-8 md:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                    <Input 
                      name="name"
                      placeholder="John Doe" 
                      required
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Email</label>
                    <Input 
                      type="email"
                      name="email"
                      placeholder="john@example.com" 
                      required
                      className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500/20 h-12 rounded-xl transition-all" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..." 
                    required
                    className="bg-background border-border focus:border-emerald-500 focus:ring-emerald-500/20 min-h-[160px] rounded-xl resize-none transition-all p-4" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center">Sending...</span>
                  ) : submitted ? (
                    <span className="flex items-center text-emerald-200">Message Sent! ✓</span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
