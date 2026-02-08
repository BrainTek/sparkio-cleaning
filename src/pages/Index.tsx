import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Hotel, Home, ArrowRight, CheckCircle2, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-cleaning.jpg";

const sectors = [
  { icon: Building2, title: "Bureaux & Open Spaces", desc: "Nettoyage régulier adapté aux environnements de travail exigeants.", link: "/services" },
  { icon: Stethoscope, title: "Cabinets Professionnels", desc: "Standards d'hygiène stricts pour cabinets médicaux, juridiques et comptables.", link: "/services" },
  { icon: Hotel, title: "Hôtellerie", desc: "Propreté irréprochable pour accueillir vos clients dans les meilleures conditions.", link: "/services" },
  { icon: Home, title: "Locations Courte Durée", desc: "Remise en état rapide et impeccable entre chaque voyageur.", link: "/services" },
];

const stats = [
  { value: "500+", label: "Interventions mensuelles" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "12", label: "Années d'expérience" },
  { value: "50+", label: "Clients récurrents" },
];

const strengths = [
  { icon: Shield, title: "Fiabilité", desc: "Équipes formées, process rigoureux, résultats constants." },
  { icon: Clock, title: "Flexibilité", desc: "Interventions adaptées à vos horaires et contraintes." },
  { icon: Star, title: "Excellence", desc: "Standards de qualité supérieurs, contrôles réguliers." },
  { icon: CheckCircle2, title: "Transparence", desc: "Devis clairs, suivi détaillé, interlocuteur dédié." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Environnement professionnel impeccable" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              Nettoyage Professionnel Premium
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Des espaces impeccables pour votre activité
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Sparkio accompagne les entreprises, cabinets professionnels et hôteliers avec des prestations de nettoyage sur mesure, fiables et récurrentes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/devis">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold text-base px-8">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <SectionHeading
            badge="Nos Secteurs"
            title="Des solutions pour chaque environnement"
            subtitle="Nous intervenons dans tous les secteurs nécessitant un nettoyage professionnel régulier et des standards de qualité élevés."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to={s.link}
                  className="group block p-8 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionHeading
            badge="Pourquoi Sparkio"
            title="Un partenaire de confiance"
            subtitle="Nous construisons des relations durables avec nos clients grâce à un service irréprochable et une organisation rigoureuse."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-8 bg-card rounded-lg border border-border"
              >
                <s.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à travailler avec un prestataire fiable ?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Obtenez un devis personnalisé adapté à vos besoins en quelques minutes.
            </p>
            <Link to="/devis">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold text-base px-10">
                Demander un devis professionnel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
