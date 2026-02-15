import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

export default function Devis() {
  const [formData, setFormData] = useState({
    type: "",
    company: "",
    contact: "",
    email: "",
    phone: "",
    units: "",
    surface: "",
    frequency: "",
    constraints: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande de devis a bien été envoyée. Nous vous recontacterons sous 24h.");
  };

  const update = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container">
          <SectionHeading
            badge="Devis Professionnel"
            title="Obtenez votre devis personnalisé"
            subtitle="Remplissez le formulaire ci-dessous. Notre équipe vous recontactera sous 24 heures avec une proposition adaptée."
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-sm space-y-8"
            name="devis"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Champ caché obligatoire pour Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot anti-spam */}
            <input type="hidden" name="bot-field" />Ò
            {/* Type d'établissement */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Type d'établissement *</Label>
                <Select onValueChange={(v) => update("type", v)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bureaux">Bureaux & Open Spaces</SelectItem>
                    <SelectItem value="cabinet-medical">Cabinet Médical</SelectItem>
                    <SelectItem value="cabinet-juridique">Cabinet Juridique</SelectItem>
                    <SelectItem value="cabinet-autre">Cabinet (autre)</SelectItem>
                    <SelectItem value="hotel">Hôtel</SelectItem>
                    <SelectItem value="airbnb">Location Courte Durée</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Fréquence souhaitée *</Label>
                <Select onValueChange={(v) => update("frequency", v)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quotidien">Quotidien</SelectItem>
                    <SelectItem value="hebdomadaire">Hebdomadaire</SelectItem>
                    <SelectItem value="bi-hebdomadaire">Bi-hebdomadaire</SelectItem>
                    <SelectItem value="mensuel">Mensuel</SelectItem>
                    <SelectItem value="ponctuel">Ponctuel</SelectItem>
                    <SelectItem value="rotation">Entre chaque rotation (Airbnb)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Volumes */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Nombre de locaux / chambres</Label>
                <Input
                  placeholder="Ex: 15 bureaux, 3 salles"
                  value={formData.units}
                  onChange={(e) => update("units", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Surface approximative (m²)</Label>
                <Input
                  placeholder="Ex: 500 m²"
                  value={formData.surface}
                  onChange={(e) => update("surface", e.target.value)}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Localisation *</Label>
              <Input
                placeholder="Ville, code postal"
                value={formData.location}
                onChange={(e) => update("location", e.target.value)}
                required
              />
            </div>

            {/* Contraintes */}
            <div className="space-y-2">
              <Label>Contraintes spécifiques</Label>
              <Textarea
                placeholder="Horaires particuliers, normes d'hygiène, accès restreints, etc."
                value={formData.constraints}
                onChange={(e) => update("constraints", e.target.value)}
                rows={3}
              />
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-xl font-semibold mb-6">Vos coordonnées</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Société *</Label>
                  <Input
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={(e) => update("company", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Nom & Prénom *</Label>
                  <Input
                    placeholder="Votre nom complet"
                    value={formData.contact}
                    onChange={(e) => update("contact", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email professionnel *</Label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Téléphone *</Label>
                  <Input
                    type="tel"
                    placeholder="01 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold text-base">
              <Send className="mr-2 h-5 w-5" />
              Envoyer ma demande de devis
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
}
