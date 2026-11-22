
const servicios = [
  {
    titulo: "Impresión de Lonas",
    descripcion:
      "Lonas impresas para anuncios, promociones, negocios y eventos. Una excelente opción para destacar tu publicidad.",
    imagen: "https://office-plus-nva.netlify.app/lona.avif",
    icono: "https://office-plus-nva.netlify.app/lona-icon.avif",
  },
  {
    titulo: "Vinil Microperforado",
    descripcion:
      "Ideal para ventanas y cristales. Muestra tu publicidad al exterior y conserva la visibilidad desde el interior.",
    imagen: "https://office-plus-nva.netlify.app/vinilPerforado.avif",
    icono: "https://office-plus-nva.netlify.app/perforado-icon.avif",
  },
  {
    titulo: "Impresión en Plotter",
    descripcion:
      "Impresiones de gran tamaño y excelente definición para publicidad, gráficos y proyectos personalizados.",
    imagen: "https://office-plus-nva.netlify.app/plotter.avif",
    icono: "https://office-plus-nva.netlify.app/plottericon.avif",
  },
];

function ServicioCard({ servicio }) {
  return (
    <article
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-slate-200/80
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      {/* Imagen */}
      <div className="relative h-52 overflow-hidden sm:h-60">
        <img
          src={servicio.imagen}
          alt={servicio.titulo}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zures/30 to-transparent" />
      </div>

      {/* Icono */}
      <div className="relative z-10 -mt-9 flex justify-center">
        <div className="
          flex h-[76px] w-[76px]
          items-center justify-center
          rounded-2xl border-4 border-white
          bg-white shadow-md
          transition-transform duration-300
          group-hover:-translate-y-1
        ">
          <img
            src={servicio.icono}
            alt=""
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-4 text-center">

        <h3 className="
          text-xl font-extrabold tracking-tight
          text-zures
          transition-colors duration-300
          group-hover:text-blue-but
          sm:text-2xl
        ">
          {servicio.titulo}
        </h3>

        <p className="
          mt-3 max-w-sm
          text-sm leading-7 text-slate-500
          sm:text-base
        ">
          {servicio.descripcion}
        </p>

      </div>

      {/* Degradado corporativo */}
      <div className="
        h-1.5 w-full
        bg-gradient-red
        opacity-90
      " />
    </article>
  );
}

export default function GranFormato() {
  return (
    <section className="
      relative w-full
      px-4 py-16
      sm:px-6 sm:py-20
      lg:px-10 lg:py-24
    ">

      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <header className="mb-12 text-center sm:mb-16">

          <span className="
            inline-flex items-center
            rounded-full
            border border-blue-100
            bg-blue-50
            px-4 py-2
            text-xs font-bold uppercase tracking-widest
            text-blue-but
            sm:text-sm
          ">
            Soluciones de impresión
          </span>

          <h2 className="
            mt-5 text-3xl font-extrabold
            tracking-tight text-zures
            sm:text-4xl lg:text-5xl
          ">
            Impresiones en
            <span className="
              block mt-1
              text-transparent bg-clip-text
              bg-gradient-red
            ">
              Gran Formato
            </span>
          </h2>

          <p className="
            mx-auto mt-5 max-w-2xl
            text-sm leading-7 text-slate-500
            sm:text-base lg:text-lg
          ">
            Hacemos realidad tus ideas con impresiones de gran tamaño,
            materiales de calidad y soluciones para tu negocio,
            publicidad o proyecto.
          </p>

          <div className="
            mx-auto mt-7 h-1 w-20
            rounded-full bg-gradient-red
          " />

        </header>

        {/* Tarjetas */}
        <div className="
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:grid-cols-3 lg:gap-8
        ">
          {servicios.map((servicio) => (
            <ServicioCard
              key={servicio.titulo}
              servicio={servicio}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
