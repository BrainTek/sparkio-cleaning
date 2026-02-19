import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { QuoteCalculator } from "@/lib/quoteCalculator";

export default function Devis() {
  const [formData, setFormData] = useState({
    type: "",
    company: "",
    contact: "",
    email: "",
    phone: "",
    units: "",
    surface: "",
    frequencyPerWeek: 0,
    constraints: "",
    location: "",
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  const canSimulate = formData.type !== "" && formData.frequencyPerWeek > 0 && Number(formData.surface) > 0;

  const handleSimulate = () => {
    const result = QuoteCalculator.calculateMonthlyEstimate({
      surface: Number(formData.surface),
      frequencyPerWeek: formData.frequencyPerWeek,
      prestationType: formData.type,
    });
    setEstimate(result);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget as HTMLFormElement);
    await fetch("/", { method: "POST", body: fd });
    toast.success("Votre demande de devis a bien été envoyée. Nous vous recontacterons sous 24h.");
  };

  const update = (field: string, value: string | number) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

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
            <input type="hidden" name="form-name" value="devis" />
            <input type="hidden" name="bot-field" />

            {/* Type & Fréquence */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Type d'établissement *</Label>
                <Select name="type" onValueChange={(v) => update("type", v)} required>
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
                <Label>Fréquence par semaine *</Label>
                <Select
                  name="frequencyPerWeek"
                  onValueChange={(v) => update("frequencyPerWeek", Number(v))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n} fois par semaine
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Volumes */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Nombre de locaux / chambres</Label>
                <Input
                  name="units"
                  placeholder="Ex: 15 bureaux, 3 salles"
                  value={formData.units}
                  onChange={(e) => update("units", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Surface approximative (m²) *</Label>
                <Input
                  name="surface"
                  type="number"
                  min={1}
                  placeholder="Ex: 500"
                  value={formData.surface}
                  onChange={(e) => update("surface", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label>Localisation *</Label>
              <Input
                name="location"
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
                name="constraints"
                placeholder="Horaires particuliers, normes d'hygiène, accès restreints, etc."
                value={formData.constraints}
                onChange={(e) => update("constraints", e.target.value)}
                rows={3}
              />
            </div>

            {/* Simulation */}
            <div className="space-y-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full font-semibold text-base border-primary text-primary hover:bg-primary/5"
                disabled={!canSimulate}
                onClick={handleSimulate}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Simuler mon devis
              </Button>

              <AnimatePresence>
                {estimate !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="border-accent bg-accent/5">
                      <CardContent className="py-6 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Estimation mensuelle</p>
                        <p className="text-3xl font-serif font-bold text-primary">
                          {QuoteCalculator.formatCurrency(estimate)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          * Estimation indicative, le tarif définitif sera précisé dans votre devis.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Coordonnées */}
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-xl font-semibold mb-6">Vos coordonnées</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Société *</Label>
                  <Input
                    name="company"
                    placeholder="Nom de votre entreprise"
                    value={formData.company}
                    onChange={(e) => update("company", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Nom & Prénom *</Label>
                  <Input
                    name="contact"
                    placeholder="Votre nom complet"
                    value={formData.contact}
                    onChange={(e) => update("contact", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email professionnel *</Label>
                  <Input
                    name="email"
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
                    name="phone"
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
