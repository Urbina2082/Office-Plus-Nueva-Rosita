
const materiales = [
  "Lona",
  "Vinil",
  "Microperforado",
  "Coroplast",
  "Imán",
  "Planos",
  "Cartulina",
];

const adicionales = [
  "Impresiones digitales",
  "Recorte de vinil",
  "Diseño gráfico",
  "Publicidad personalizada",
];

export default function Materiales() {
  return (
    <section className="
      relative w-full
      px-4 py-14
      sm:px-6 sm:py-20
      lg:px-10 lg:py-24
    ">

      <div className="
        mx-auto grid w-full max-w-7xl
        grid-cols-1 gap-12
        lg:grid-cols-2 lg:gap-16
      ">

        {/* MATERIALES DISPONIBLES */}

        <div className="flex flex-col items-center text-center">

          {/* Icono */}
          <div className="
            flex h-16 w-16 items-center justify-center
            rounded-2xl border border-slate-200/80
            bg-white shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:h-20 sm:w-20
          ">
            <img
              src="https://office-plus-nva.netlify.app/materiales.avif"
              alt="Materiales disponibles"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </div>

          {/* Encabezado */}
          <h2 className="
            mt-5 text-2xl font-extrabold
            tracking-tight text-zures
            sm:text-3xl lg:text-4xl
          ">
            Materiales disponibles
          </h2>

          <p className="
            mt-3 max-w-md
            text-sm leading-7 text-slate-500
            sm:text-base
          ">
            Contamos con diferentes materiales para realizar
            impresiones y trabajos publicitarios de acuerdo
            con las necesidades de cada proyecto.
          </p>

          {/* Lista de materiales */}
          <div className="
            mt-8 flex w-full max-w-xl flex-wrap
            justify-center gap-2.5 sm:gap-3
          ">
            {materiales.map((material) => (
              <span
                key={material}
                className="
                  rounded-full
                  border border-slate-200
                  bg-white
                  px-4 py-2.5
                  text-xs font-semibold text-zures
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-but
                  hover:text-blue-but
                  hover:shadow-md
                  sm:px-5 sm:text-sm
                "
              >
                {material}
              </span>
            ))}
          </div>

          {/* Detalle inferior */}
          <div className="
            mt-8 h-1 w-16
            rounded-full bg-gradient-red
          " />

        </div>

        {/* SERVICIOS ADICIONALES */}

        <div className="
          flex flex-col items-center
          border-t border-slate-200/80
          pt-12 text-center
          lg:border-l lg:border-t-0
          lg:pl-12 lg:pt-0
        ">

          {/* Icono */}
          <div className="
            flex h-16 w-16 items-center justify-center
            rounded-2xl border border-slate-200/80
            bg-white shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-md
            sm:h-20 sm:w-20
          ">
            <img
              src="https://office-plus-nva.netlify.app/estrella.avif"
              alt="Servicios adicionales"
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </div>

          {/* Encabezado */}
          <h2 className="
            mt-5 text-2xl font-extrabold
            tracking-tight text-zures
            sm:text-3xl lg:text-4xl
          ">
            Servicios adicionales
          </h2>

          <p className="
            mt-3 max-w-md
            text-sm leading-7 text-slate-500
            sm:text-base
          ">
            También ofrecemos servicios complementarios
            para darle un mejor acabado y presentación
            a tus proyectos.
          </p>

          {/* Lista de servicios */}
          <div className="
            mt-8 grid w-full max-w-xl
            grid-cols-1 gap-3 sm:grid-cols-2
          ">
            {adicionales.map((servicio) => (
              <div
                key={servicio}
                className="
                  group flex items-center gap-3
                  rounded-2xl
                  border border-slate-200/80
                  bg-white
                  px-4 py-4
                  text-left shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-but/30
                  hover:shadow-md
                "
              >
                <span className="
                  flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-blue-50
                  text-xs font-bold text-blue-but
                  transition-all duration-300
                  group-hover:bg-gradient-red
                  group-hover:text-white
                ">
                  ✓
                </span>

                <span className="
                  text-sm font-semibold
                  text-zures
                  sm:text-base
                ">
                  {servicio}
                </span>
              </div>
            ))}
          </div>

          {/* Detalle inferior */}
          <div className="
            mt-8 h-1 w-16
            rounded-full bg-gradient-red
          " />

        </div>

      </div>
    </section>
  );
}
