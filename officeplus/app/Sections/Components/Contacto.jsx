
export default function Contacto() {
  return (
    <section className="
      relative w-full
      px-4 py-16
      sm:px-6 sm:py-20
      lg:px-10 lg:py-24
    ">

      <div className="
        relative mx-auto max-w-7xl
        overflow-hidden rounded-3xl bg-bac
        bg-mesh
        px-6 py-14
        text-center text-white
        shadow-xl
        sm:px-10 sm:py-16
        lg:px-16 lg:py-20
      ">

        {/* Detalles decorativos */}
        <div className="
          pointer-events-none absolute
          -right-20 -top-24
          h-64 w-64 rounded-full
          border border-white/10
          bg-white/10 blur-2xl
        " />

        <div className="
          pointer-events-none absolute
          -bottom-32 -left-20
          h-72 w-72 rounded-full
          bg-white/10 blur-3xl
        " />

        <div className="relative z-10 mx-auto max-w-3xl">

          {/* Icono */}
          <div className="
            mx-auto flex h-20 w-20
            items-center justify-center
            rounded-2xl border border-white/30
            bg-white/15 backdrop-blur-xl
            shadow-lg
            sm:h-24 sm:w-24
          ">
            <img
              src="https://office-plus-nva.netlify.app/llamar.avif"
              alt="Contacto"
              className="h-14 w-14 object-contain sm:h-16 sm:w-16 text-white"
            />
          </div>

          {/* Encabezado */}
          <p className="
            mt-7 text-xs font-bold
            uppercase tracking-[3px]
            text-white/80
            sm:text-sm
          ">
            Estamos para atenderte
          </p>

          <h2 className="
            mt-3 text-3xl font-extrabold
            leading-tight tracking-tight
            sm:text-4xl lg:text-5xl
          ">
            ¿Necesitas una cotización?
          </h2>

          <p className="
            mx-auto mt-5 max-w-xl
            text-sm leading-7 text-white/85
            sm:text-base lg:text-lg
          ">
            Cuéntanos qué necesitas. Nuestro equipo está listo
            para brindarte atención personalizada y ayudarte
            a encontrar la solución adecuada para tu proyecto.
          </p>

          {/* Botón de llamada */}
          <a
            href="tel:8616142776"
            className="
              mt-9 inline-flex
              flex-col items-center justify-center
              gap-1 rounded-2xl
              bg-white px-8 py-4
              font-bold text-zures
              shadow-lg
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              sm:flex-row sm:gap-3
              sm:rounded-full sm:px-10
            "
          >
            <span className="text-sm sm:text-base">
              Llámanos ahora
            </span>

            <span className="text-lg font-extrabold sm:text-xl">
              861-614-2776
            </span>
          </a>

          {/* Ubicación */}
          <div className="
            mx-auto mt-10 flex max-w-xl
            flex-col items-center justify-center
            gap-2 border-t border-white/20
            pt-7 sm:flex-row sm:gap-3
          ">

            <span className="
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full border border-white/20
              bg-white/10 text-lg
            ">
              📍
            </span>

            <p className="
              text-sm leading-6 text-white/90
              sm:text-left
            ">
              Jalisco 2125, Independencia, 26830,
              Nueva Rosita, Coahuila.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
