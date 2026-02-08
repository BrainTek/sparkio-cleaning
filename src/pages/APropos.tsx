import { motion } from "framer-motion";
import { Award, Heart, Target, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Award, title: "Excellence", desc: "Nous visons l'irréprochable dans chaque prestation, chaque jour." },
  { icon: Heart, title: "Engagement", desc: "Nos équipes sont impliquées, formées et fières de leur travail." },
  { icon: Target, title: "Rigueur", desc: "Des process clairs, des contrôles systématiques, zéro improvisation." },
  { icon: TrendingUp, title: "Évolution", desc: "Nous investissons dans la formation, les outils et les méthodes." },
];

export default function APropos() {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container">
          <SectionHeading
            badge="À Propos"
            title="Sparkio, votre partenaire propreté"
            subtitle="Une entreprise structurée, des équipes engagées, une qualité constante au service de vos espaces professionnels."
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Sparkio</strong> est née d'un constat simple : trop d'entreprises souffrent d'un nettoyage irrégulier, mal organisé ou en dessous de leurs standards. Nous avons créé Sparkio pour offrir une alternative fiable, professionnelle et durable.
              </p>
              <p>
                Depuis plus de 12 ans, nous accompagnons des entreprises de toutes tailles — bureaux, cabinets professionnels, hôtels et locations courte durée — avec un service structuré, des équipes formées et un suivi rigoureux.
              </p>
              <p>
                Notre approche repose sur la transparence, la régularité et l'adaptabilité. Chaque client bénéficie d'un interlocuteur dédié, d'un cahier des charges personnalisé et de contrôles qualité systématiques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <SectionHeading
            badge="Nos Valeurs"
            title="Ce qui nous guide"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-8 bg-card rounded-lg border border-border text-center"
              >
                <v.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
