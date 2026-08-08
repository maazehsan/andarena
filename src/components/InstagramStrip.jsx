import { images } from "../data/images.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./InstagramStrip.css";

const GRID = [
  images.instagramGrid1,
  images.instagramGrid2,
  images.instagramGrid3,
  images.instagramGrid4,
];

export default function InstagramStrip() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="ig section">
      <div
        ref={ref}
        className={`container ig__inner reveal ${isVisible ? "is-visible" : ""}`}
      >
        <div className="ig__heading">
          <span className="dash-accent" />
          <div className="pill-tag">
            <InstagramIcon />
            andarena_coffee
          </div>
          <a
            href="https://instagram.com/andarena_coffee"
            target="_blank"
            rel="noreferrer"
            className="btn btn--solid ig__cta"
          >
            تابعنا
          </a>
        </div>

        <div className="ig__grid">
          {GRID.map((src, i) => (
            <div className="ig__cell" key={src}>
              <img src={src} alt={`صورة من إنستقرام أندرينا رقم ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1C1A17" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="#1C1A17" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="#1C1A17" />
    </svg>
  );
}
