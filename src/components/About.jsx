import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./About.css";

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="about section">
      <div
        ref={ref}
        className={`container about__inner reveal ${isVisible ? "is-visible" : ""}`}
      >
        <span className="dash-accent about__dash" />
        <p className="eyebrow">وش نسوي</p>
        <p className="about__text">
          أندرينا مو مجرد مقهى تطلب فيه قهوتك وتمشي. هو الركن اللي تلقى فيه
          هدوءك وأنت شغّال على مشروعك، أو تتفرغ لجلسة طويلة مع صحابك بدون
          استعجال. جدار الطوب المكشوف، الخشب الدافي، وضوء الصباح اللي يدخل
          من الشباك، كلها تفاصيل صممناها عشان تحس إنك بمكان يستاهل وقتك.
        </p>
      </div>
    </section>
  );
}
