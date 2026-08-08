import { images } from "../data/images.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./SignatureDrinks.css";

const ITEMS = [
  {
    key: "cinnamon",
    name: "لاتيه القرفة",
    note: "الأكثر طلبًا",
    img: images.drinkCinnamonLatte,
    alt: "لاتيه القرفة في كوب على طاولة خشبية",
    featured: true,
  },
  {
    key: "chocolate",
    name: "شوكولاتة ساخنة",
    note: "دافية وغنية",
    img: images.drinkHotChocolate,
    alt: "شوكولاتة ساخنة في كوب فخار",
    featured: false,
  },
  {
    key: "croissant",
    name: "كروسون اللوز",
    note: "طازج يوميًا",
    img: images.foodCroissant,
    alt: "كروسون اللوز بالمكسرات",
    featured: false,
  },
  {
    key: "coldbrew",
    name: "كولد برو",
    note: "بارد ومنعش",
    img: images.drinkColdBrew,
    alt: "كولد برو مثلج في كوب زجاج",
    featured: false,
  },
];

export default function SignatureDrinks() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="menu" className="drinks section">
      <div className="container">
        <div
          ref={ref}
          className={`drinks__heading reveal ${isVisible ? "is-visible" : ""}`}
        >
          <span className="dash-accent" />
          <p className="eyebrow">القائمة</p>
          <h2>مشروباتنا المميزة</h2>
        </div>

        <div className="drinks__grid">
          {ITEMS.map((item) => (
            <article
              key={item.key}
              className={`drink-card ${item.featured ? "drink-card--featured" : ""}`}
            >
              <div className="drink-card__photo">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <div className="drink-card__label">
                <span className="drink-card__tag">{item.note}</span>
                <h3 className="drink-card__name">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
