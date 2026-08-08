import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SignatureDrinks from "./components/SignatureDrinks.jsx";
import AmbianceGallery from "./components/AmbianceGallery.jsx";
import HoursLocation from "./components/HoursLocation.jsx";
import InstagramStrip from "./components/InstagramStrip.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDrinks />
        <AmbianceGallery />
        <HoursLocation />
        <InstagramStrip />
      </main>
      <Footer />
    </>
  );
}
