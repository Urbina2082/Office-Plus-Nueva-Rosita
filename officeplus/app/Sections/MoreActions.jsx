import GranFormato from "./Components/GranFormato";
import Materiales from "./Components/Materiales";
import Equipamiento from "./Components/Equipamiento";
import Contacto from "./Components/Contacto";

export default function ServiciosSection() {
  return (
    <main className="bg-white">

      <GranFormato />

      <Materiales />

      <Equipamiento />

      <Contacto />

    </main>
  );
}