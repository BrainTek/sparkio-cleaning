import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

import officeImg from "@/assets/services-office.jpg";
import hotelImg from "@/assets/services-hotel.jpg";
import cabinetImg from "@/assets/services-cabinet.jpg";
import airbnbImg from "@/assets/services-airbnb.jpg";

const services = [
  {
    id: "bureaux",
    title: "Bureaux & Open Spaces",
    subtitle: "Nettoyage régulier pour environnements de travail",
    desc: "Nous assurons l'entretien quotidien ou hebdomadaire de vos locaux professionnels : sols, sanitaires, espaces communs, salles de réunion. Un environnement sain qui reflète le professionnalisme de votre entreprise.",
    features: ["Entretien quotidien ou hebdomadaire", "Nettoyage des sanitaires et cuisines", "Sols, vitres et mobilier", "Gestion des déchets et recyclage"],
    img: officeImg,
  },
  {
    id: "cabinets",
    title: "Cabinets Professionnels",
    subtitle: "Hygiène et discrétion pour professions réglementées",
    desc: "Cabinets médicaux, juridiques ou comptables : nous respectons vos standards d'hygiène spécifiques, la confidentialité de vos espaces et les normes de votre secteur d'activité.",
    features: ["Respect des normes sanitaires", "Désinfection des surfaces de contact", "Horaires adaptés aux consultations", "Traitement confidentiel des espaces"],
    img: cabinetImg,
  },
  {
    id: "hotellerie",
    title: "Nettoyage Hôtelier",
    subtitle: "Excellence hôtelière, propreté irréprochable",
    desc: "Chambres, parties communes, espaces de restauration : notre équipe assure un niveau de propreté conforme aux standards de l'hôtellerie professionnelle, pour une expérience client impeccable.",
    features: ["Remise à blanc et recouche", "Parties communes et réception", "Linge et équipements sanitaires", "Contrôle qualité systématique"],
    img: hotelImg,
  },
  {
    id: "airbnb",
    title: "Locations Courte Durée",
    subtitle: "Rotation rapide, qualité constante",
    desc: "Airbnb, meublés touristiques, résidences de vacances : nettoyage complet entre chaque voyageur, gestion du linge, réapprovisionnement. Un service clé en main pour maximiser vos avis positifs.",
    features: ["Nettoyage complet entre voyageurs", "Gestion du linge de maison", "Réapprovisionnement consommables", "Checklist qualité photographique"],
    img: airbnbImg,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-navy">
        <div className="container">
          <SectionHeading
            badge="Nos Services"
            title="Des prestations adaptées à chaque secteur"
            subtitle="Chaque environnement professionnel a ses exigences. Nous y répondons avec des protocoles sur mesure et une qualité constante."
            light
          />
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">{s.subtitle}</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/devis">
                  <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
