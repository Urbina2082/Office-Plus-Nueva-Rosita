import InitSection from "@/app/Components/InitSection";

const productos = [
  {
    nombre: "Sillas para oficina",
    imagen: "https://office-plus-nva.netlify.app/sillaParaOficina.avif",
  },
  {
    nombre: "Escritorios",
    imagen: "https://office-plus-nva.netlify.app/escritorio.avif",
  },
  {
    nombre: "Archiveros",
    imagen: "https://office-plus-nva.netlify.app/archi.avif",
  },
  {
    nombre: "Lockers",
    imagen: "https://office-plus-nva.netlify.app/lockers.avif",
  },
  {
    nombre: "Cestos de basura",
    imagen: "https://office-plus-nva.netlify.app/cestoDeBasura.avif",
  },
];

export default function Equipamiento() {
  return (
    <section
      className="
      relative w-full
      px-4 py-16
      sm:px-6 sm:py-20
      lg:px-10 lg:py-24
    "
    >
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <InitSection
          subtitle="Mobiliario y organización"
          title=" Equipamiento para oficina"
          description="Encuentra mobiliario y artículos funcionales
            para organizar, equipar y aprovechar mejor
            tus espacios de trabajo."
        />

        {/* PRODUCTOS */}

        <div
          className="
          grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:grid-cols-3 lg:gap-8
        "
        >
          {productos.map((producto) => (
            <article
              key={producto.nombre}
              className="
                group relative flex flex-col
                overflow-hidden rounded-3xl
                border border-slate-200/80
                bg-white shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Imagen */}
              <div
                className="
                relative flex h-64
                items-center justify-center
                overflow-hidden bg-white
                p-6 sm:h-72
              "
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  loading="lazy"
                  className="
                    h-full w-full object-contain
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Información */}
              <div
                className="
                relative mt-auto
                border-t border-slate-100
                px-5 py-5 text-center
                sm:px-6 sm:py-6
              "
              >
                <h3
                  className="
                  text-lg font-extrabold
                  tracking-tight text-zures
                  transition-colors duration-300
                  group-hover:text-blue-but
                  sm:text-xl
                "
                >
                  {producto.nombre}
                </h3>
              </div>

              {/* Detalle inferior */}
              <div
                className="
                h-1.5 w-full
                bg-gradient-red
                opacity-80
              "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
