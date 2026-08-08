import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./HoursLocation.css";

const HOURS = [
  { days: "السبت – الخميس", time: "٦:٠٠ ص – ١:٠٠ ص" },
  { days: "الجمعة", time: "٧:٠٠ ص – ٢:٠٠ ص" },
];

export default function HoursLocation() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="location" className="hours brick-texture section">
      <div
        ref={ref}
        className={`container hours__inner reveal ${isVisible ? "is-visible" : ""}`}
      >
        <div className="hours__info">
          <span className="dash-accent dash-accent--on-dark" />
          <p className="eyebrow eyebrow--light">أوقات الدوام</p>
          <h2 className="hours__heading">نستناكم كل يوم</h2>

          <ul className="hours__list">
            {HOURS.map((row) => (
              <li key={row.days}>
                <ClockIcon />
                <div>
                  <span className="hours__days">{row.days}</span>
                  <span className="hours__time">{row.time}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="hours__address">
           غرناطة، الرياض المملكة العربية السعودية
          </p>
        </div>

        <div className="hours__map" aria-label="خريطة موقع أندرينا كافيه">
          <iframe
            title="خريطة موقع أندرينا كافيه"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.203137155506!2d46.730719774427136!3d24.7884967481352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd18735ee2db%3A0x1df41553feb2d438!2sAndarena%20Cafe!5e0!3m2!1sen!2s!4v1786183252039!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg
      className="hours__clock-icon"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="13" cy="13" r="11" stroke="var(--color-mustard)" strokeWidth="2" />
      <path
        d="M13 7v6l4 3"
        stroke="var(--color-mustard)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
