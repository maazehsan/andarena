import { images } from "../data/images.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__photo">
        <img
          src={images.heroExterior}
          alt="واجهة أندرينا كافيه من الطوب المكشوف وإطارات النوافذ الخضراء"
        />
        <div className="hero__photo-edge" aria-hidden="true" />

        {/* Signature element: the circular logo seal, slowly rotating —
            the one recurring mark from every Instagram post, brought
            to life as this page's single animated flourish. */}
        <div className="hero__seal" aria-hidden="true">
          <img src={images.logo} alt="" />
        </div>
      </div>

      <div className="hero__panel">
        <div className="hero__panel-inner">
          <p className="eyebrow eyebrow--light">قهوة مختصة · جو دافي</p>
          <span className="dash-accent dash-accent--on-mustard" />
          <h1 className="hero__headline">قهوتك تبدأ من هنا</h1>
          <p className="hero__subtext">
            زاوية دافية بين الطوب والخشب، صممناها عشان تناسب صباحك الهادي
            وجلستك الطويلة مع القهوة.
          </p>
          <a href="#menu" className="btn btn--solid hero__cta">
            شوف قائمتنا
          </a>
        </div>
      </div>
    </section>
  );
}
