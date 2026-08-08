import { images } from "../data/images.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={images.logo} alt="شعار أندرينا كافيه" className="footer__badge" />
          <p className="footer__tagline">من قلب المدينة، فنجان بنكهة الدفا.</p>
        </div>

        <div className="footer__socials">
          <a href="https://instagram.com/andarena_coffee" target="_blank" rel="noreferrer" aria-label="إنستقرام">
            IG
          </a>
          <a href="https://wa.me/966501264631" target="_blank" rel="noreferrer" aria-label="واتساب">
            WA
          </a>
          <a href="https://tiktok.com/@andarena_coffee" target="_blank" rel="noreferrer" aria-label="تيك توك">
            TT
          </a>
        </div>
      </div>

      <p className="footer__copyright">
        © ٢٠٢٦ Andarena Cafe. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
