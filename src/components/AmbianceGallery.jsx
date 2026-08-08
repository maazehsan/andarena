import { images } from "../data/images.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./AmbianceGallery.css";

const PANELS = [
  {
    key: "window",
    img: images.ambianceWindowSeating,
    alt: "جلسة بجانب الشباك مع ضوء الصباح",
    eyebrow: "ركن الشباك",
    line: "ضوء الصباح، كرسيك المفضل، وفنجانك — بس كذا.",
    side: "start",
  },
  {
    key: "plants",
    img: images.ambiancePlantCorner,
    alt: "ركن النباتات المتدلية في المقهى",
    eyebrow: "ركن النباتات",
    line: "زاوية خضراء تنسيك زحمة اليوم من أول خطوة.",
    side: "end",
    withArrow: true,
  },
  {
    key: "table",
    img: images.ambianceCoffeeOnTable,
    alt: "فنجان قهوة على طاولة خشبية",
    eyebrow: "طاولتك جاهزة",
    line: "قهوتك سخنة، والمكان يستناك.",
    side: "start",
  },
];

export default function AmbianceGallery() {
  return (
    <section id="ambiance" className="ambiance section">
      <div className="ambiance__intro container">
        <span className="dash-accent" />
        <p className="eyebrow">الأجواء</p>
        <h2>كل زاوية عندنا لها طابعها</h2>
      </div>

      {PANELS.map((panel) => (
        <AmbiancePanel key={panel.key} panel={panel} />
      ))}
    </section>
  );
}

function AmbiancePanel({ panel }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`ambiance-panel ambiance-panel--${panel.side} reveal ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="ambiance-panel__photo">
        <img src={panel.img} alt={panel.alt} loading="lazy" />
      </div>

      <div className="ambiance-panel__block">
        <span className="dash-accent dash-accent--on-mustard" />
        <p className="eyebrow">{panel.eyebrow}</p>
        <p className="ambiance-panel__line">{panel.line}</p>

        {panel.withArrow && (
          <div className="ambiance-panel__arrow-wrap">
            <svg
              className="ambiance-panel__arrow"
              width="120"
              height="70"
              viewBox="0 0 120 70"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 8 C 40 5, 70 45, 108 55"
                stroke="var(--color-charcoal)"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              <path
                d="M96 46 L110 56 L98 63"
                stroke="var(--color-charcoal)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="ambiance-panel__arrow-note">مكانك المفضل بانتظارك</span>
          </div>
        )}
      </div>
    </div>
  );
}
