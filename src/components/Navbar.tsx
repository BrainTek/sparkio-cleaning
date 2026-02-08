import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sparkio-logo.png";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Méthodologie", path: "/methodologie" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sparkio" className="h-10 md:h-12 w-auto" />
          <span className="font-serif text-xl font-bold text-primary hidden sm:inline">Sparkio</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  pathname === item.path ? "text-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+33100000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            01 00 00 00 00
          </a>
          <Link to="/devis">
            <Button className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
              Demander un devis
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border">
          <ul className="container py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    pathname === item.path ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/devis" onClick={() => setOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold">
                  Demander un devis
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
