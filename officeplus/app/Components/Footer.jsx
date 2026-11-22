
export default function Footer() {
  return (
    <footer className="bg-bac bg-mesh bg-no-repeat bg-cover bg-center text-white px-6 md:px-12 pt-16 pb-6">

      <div className="max-w-7xl mx-auto">

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-14">

    
          <div className="lg:pr-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Office <span className="text-red-400">Plus.</span>
            </h2>

            <p className="text-white/70 text-sm leading-7 mt-5 max-w-xs">
              Su mejor aliado para equipar la oficina con productos de
              calidad. Con más de 20 años de experiencia.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs text-white/80">
                Calidad y confianza desde hace 20 años
              </span>
            </div>
          </div>

        
          <div>
            <h3 className="font-bold text-lg mb-6">
              Atención al Cliente
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-bold text-lg mb-6">
              Mi Cuenta
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Política de Devolución
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Envíos y Entregas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6">
              Contáctanos
            </h3>

            <ul className="flex flex-col gap-5 text-sm text-white/75">

              <li className="flex items-start gap-3">
                <span className="text-red-300 text-lg">☎</span>
                <a href="tel:+528616146075" className="hover:text-white transition-colors">
                  +52 861 614 6075
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-300 text-lg">✉</span>
                <a
                  href="mailto:officeplus.nuevarosita@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  officeplus.nuevarosita@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-300 text-lg">⌖</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jalisco+2125+Independencia+Nueva+Rosita+Coahuila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-6"
                >
                  Jalisco 2125, Independencia,
                  26830 Nueva Rosita, Coah.
                </a>
              </li>

            </ul>
          </div>

        </div>

       
        <div className="border border-white/15 bg-white/[0.06] backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Office Plus
            </h3>
            <p className="text-white/65 text-sm mt-2">
              Comodidad con gusto, te atendemos 🎯
            </p>
          </div>

          <a
            href="tel:+528616146075"
            className="px-6 py-3 rounded-xl bg-white text-[#311b92] font-semibold text-sm hover:bg-white/90 transition-all"
          >
            Contáctanos
          </a>

        </div>

      
        <div className="border-t border-white/15 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">

          <p className="text-xs text-white/50">
            © 2026 Office Plus. Todos los derechos reservados.
          </p>

          <p className="text-xs text-white/50">
            Calidad, servicio y confianza.
          </p>

        </div>

      </div>
    </footer>
  );
}
