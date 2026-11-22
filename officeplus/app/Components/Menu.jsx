
import { ButtonClasic } from "../Components/Buttons";
import { InfoIcon } from "../Components/Icons";

export default function Menu() {
  return (
    <header className="w-full bg-white px-4 sm:px-6 lg:px-10 py-3">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Logo y buscador */}
        <div className="flex items-center gap-4 w-full lg:w-auto lg:flex-1">
          <a href="#home" className="shrink-0">
            <img
              src="/iconLetra.avif"
              alt="Office Plus"
              className="w-24 sm:w-28 object-contain"
            />
          </a>

          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Busca productos, marcas y más..."
              className="w-full h-11 bg-gray-100 border border-gray-200 rounded-full px-5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-but focus:bg-white focus:ring-2 focus:ring-blue-but/10"
            />
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-7 w-full lg:w-auto">

          <nav>
            <ul className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium text-black/60">
              <li className="hover:text-blue-but transition-colors duration-300">
                <a href="#home">Inicio</a>
              </li>

              <li className="hover:text-blue-but transition-colors duration-300">
                <a href="#about">Nosotros</a>
              </li>

              <li className="hover:text-blue-but transition-colors duration-300">
                <a href="#services">Servicios</a>
              </li>

              <li className="hover:text-blue-but transition-colors duration-300">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </nav>

          <div className="shrink-0">
            <ButtonClasic name={<InfoIcon />} />
          </div>

        </div>
      </div>
    </header>
  );
}
