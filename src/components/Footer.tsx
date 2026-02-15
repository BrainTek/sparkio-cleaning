import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/sparkio-logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Sparkio" className="h-10 w-auto brightness-200" />
              <span className="font-serif text-xl font-bold">Sparkio</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Nettoyage professionnel premium pour entreprises, cabinets et hôtellerie. Qualité constante, standards élevés.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "Services", "Méthodologie", "À propos", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace("à propos", "a-propos").replace("méthodologie", "methodologie")}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Bureaux & Open Spaces</li>
              <li>Cabinets Professionnels</li>
              <li>Nettoyage Hôtelier</li>
              <li>Locations Courte Durée</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/50">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-accent" />
                06 17 50 04 24
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" />
                contact@sparkio.fr
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                Paris & Île-de-France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Sparkio. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
