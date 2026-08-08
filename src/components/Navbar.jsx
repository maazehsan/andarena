import { useEffect, useState } from "react";
import { images } from "../data/images.js";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "القائمة", href: "#menu" },
  { label: "الأجواء", href: "#ambiance" },
  { label: "موقعنا", href: "#location" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <header className={`navbar ${isScrolled ? "navbar--solid" : ""}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__brand">
          <img
            src={images.logo}
            alt="شعار أندرينا كافيه"
            className="navbar__badge"
          />
          <span className="navbar__wordmark">ANDARENA CAFE</span>
        </a>

        <nav className="navbar__links" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#menu" className="btn btn--solid navbar__cta">
          شوف قائمتنا
        </a>

        <button
          className="navbar__hamburger"
          aria-label="فتح القائمة"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      <div className={`navbar__mobile ${isMenuOpen ? "is-open" : ""}`}>
        <button
          className="navbar__close"
          aria-label="إغلاق القائمة"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>
        <nav className="navbar__mobile-links" aria-label="التنقل للجوال">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <div
          className="navbar__scrim"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
