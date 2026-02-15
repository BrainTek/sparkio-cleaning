import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "06 17 50 04 24", href: "tel:+33617500424" },
  { icon: Mail, label: "Email", value: "contact@sparkio.fr", href: "mailto:contact@sparkio.fr" },
  { icon: MapPin, label: "Zone d'intervention", value: "Paris & Île-de-France" },
  { icon: Clock, label: "Disponibilité", value: "7 j/ 7, 7h-20h" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    toast.success("Votre message a bien été envoyé. Nous vous répondrons rapidement.");
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container">
          <SectionHeading
            badge="Contact"
            title="Parlons de votre projet"
            subtitle="Une question, un besoin spécifique ? Notre équipe est à votre disposition pour échanger."
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-accent transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-card p-8 rounded-lg border border-border shadow-sm space-y-6"
            >
              {/* Champ caché obligatoire pour Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot anti-spam */}
              <input type="hidden" name="bot-field" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nom *</Label>
                  <Input
                    name="name"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Téléphone</Label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="01 00 00 00 00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Message *</Label>
                <Textarea
                  name="message"
                  placeholder="Décrivez votre besoin..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </motion.form>

          </div>
        </div>
      </section>
    </Layout>
  );
}
