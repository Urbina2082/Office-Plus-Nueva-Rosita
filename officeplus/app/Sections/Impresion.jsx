
import { FileUpIcon, WhatsappIcon } from "../Components/Icons";
import { ButtonWhatsapp } from "../Components/Buttons";

const formatos = ["PDF", "AI", "PSD", "CDR", "JPG", "PNG"];

export default function Impresion() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-6">

        {/* Panel informativo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-black/5 flex flex-col justify-center">

          <div className="bg-bac bg-mesh w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-900/20">
            <FileUpIcon />
          </div>

          <span className="uppercase tracking-[0.2em] text-xs font-bold text-red-500 mt-8 mb-3">
            Servicio de impresión
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zures leading-[1.05]">
            Tus archivos,
            <br />
            <span className="bg-gradient-red bg-clip-text text-transparent">
              listos para imprimir.
            </span>
          </h2>

          <p className="text-gray-500 leading-7 mt-6 max-w-lg">
            Manda tus diseños, proyectos o documentos directamente por
            <span className="text-green-600 font-semibold"> WhatsApp </span>
            y nosotros nos encargamos del resto.
          </p>

          {/* Formatos */}
          <div className="mt-9">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">
              Formatos aceptados
            </p>

            <div className="flex flex-wrap gap-2">
              {formatos.map((formato) => (
                <span
                  key={formato}
                  className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-sm font-bold text-zures"
                >
                  {formato}
                </span>
              ))}
            </div>
          </div>

          {/* Aviso */}
          <div className="mt-8 flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
            <span className="text-red-500 text-lg">ⓘ</span>
            <p className="text-xs sm:text-sm text-red-800 leading-6">
              Este número es exclusivamente para el envío de archivos.
              No se atienden consultas de productos ni pedidos por este medio.
            </p>
          </div>
        </div>

        {/* Panel WhatsApp */}
        <div className="relative overflow-hidden bg-bac bg-mesh rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center text-white min-h-[420px]">

          {/* Decoración */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">

            <div className="w-24 h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <img
                src="/Icons/whatsappIcon.avif"
                className="w-16 h-16 object-contain"
                alt="WhatsApp"
              />
            </div>

            <span className="mt-8 text-xs uppercase tracking-[0.2em] text-white/60 font-semibold">
              Envío rápido y sencillo
            </span>

            <h3 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
              ¿Listo para
              <br />
              imprimir?
            </h3>

            <p className="text-white/70 text-sm leading-6 mt-4 max-w-xs">
              Comparte tus archivos con nosotros y solicita tu impresión.
            </p>

            <div className="mt-8 w-full flex justify-center">
              <ButtonWhatsapp
                icon={<WhatsappIcon />}
                name="Enviar archivos"
              />
            </div>

            <p className="text-[11px] text-white/40 mt-6">
              Atención exclusiva para archivos de impresión
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
