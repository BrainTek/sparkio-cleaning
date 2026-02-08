import { motion } from "framer-motion";
import { ClipboardCheck, Users, Sparkles, BarChart3, RefreshCw, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: ClipboardCheck, title: "Audit & Cahier des charges", desc: "Visite de vos locaux, analyse de vos besoins, définition du périmètre d'intervention et des exigences spécifiques." },
  { icon: Users, title: "Équipe dédiée", desc: "Affectation d'une équipe formée à votre secteur, avec un référent unique pour le suivi opérationnel." },
  { icon: Sparkles, title: "Intervention", desc: "Exécution des prestations selon un protocole validé, avec utilisation de produits professionnels certifiés." },
  { icon: BarChart3, title: "Contrôle qualité", desc: "Vérification systématique après chaque intervention, grilles de contrôle standardisées." },
  { icon: RefreshCw, title: "Suivi & Ajustements", desc: "Points réguliers avec votre référent, ajustement des prestations selon l'évolution de vos besoins." },
  { icon: ShieldCheck, title: "Garantie satisfaction", desc: "En cas de non-conformité, reprise de l'intervention sous 24h sans frais supplémentaires." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Methodologie() {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container">
          <SectionHeading
            badge="Notre Méthodologie"
            title="Un process rigoureux, des résultats constants"
            subtitle="Chaque prestation suit un processus éprouvé pour garantir un niveau de qualité constant et mesurable."
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-accent">ÉTAPE {i + 1}</span>
                    <h3 className="font-serif text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading
            badge="Standards"
            title="Nos engagements qualité"
            subtitle="Des standards élevés et mesurables pour chaque intervention."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Produits professionnels éco-certifiés",
              "Personnel formé et encadré",
              "Grilles de contrôle après chaque intervention",
              "Traçabilité complète des prestations",
              "Assurance responsabilité civile professionnelle",
              "Respect des normes sectorielles (HACCP, hygiène médicale)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
