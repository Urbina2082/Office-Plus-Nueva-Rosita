import Hero from "./Sections/Hero.jsx";
import Envios from "./Sections/Envios.jsx";
import Impresion from "./Sections/Impresion.jsx";
import Footer from "./Components/Footer.jsx";
import MoreActions from "./Sections/MoreActions.jsx";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-purple-400/20 blur-[110px]" />

      <Hero />
      <Envios />
      <Impresion />
      <MoreActions />
      <Footer />
    </div>
  );
}
