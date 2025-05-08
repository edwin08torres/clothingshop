import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  return (
    <header className="relative bg-white shadow-md h-16 flex items-center justify-between px-4">
      <Link to="/" className="font-bold">
      Loomcraft
      </Link>

      <nav className="hidden lg:flex gap-6">
        <Link to="/contact">Contacto</Link>
        <Link to="/gallery">Galería</Link>
      </nav>

      {/* hamburger */}
      <button
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-black z-1001"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* menú mobile */}
      <nav
        className={`
          lg:hidden fixed inset-0 bg-white z-100
          flex flex-col items-center justify-center gap-6 text-black
          transition-transform duration-700
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <Link to="/"   onClick={() => setMenuOpen(false)} className="font-bold">Loomcraft</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link>
      </nav>
    </header>
  );
};
