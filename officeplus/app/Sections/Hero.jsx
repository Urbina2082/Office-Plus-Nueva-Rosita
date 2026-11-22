import Menu from "../Components/Menu";
import {
  CartIcon,
  BoxIcon,
  BoxCheckIcon,
  VanIcon,
  SecurityIcon,
} from "../Components/Icons";
import { ButtonRed, ButtonTransparent } from "../Components/Buttons";

export default function Hero() {
  return (
    <div>
      <Menu />

      <section className="bg-bac bg-mesh bg-no-repeat bg-cover bg-center box-border py-12 px-5 md:px-10 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Contenido */}
          <div className="w-full sm:max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-4">
              Todo lo que necesitas para tu{" "}
              <span className="text-red-500">oficina</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Productos de calidad, precios incomparables y envío rápido.{" "}
              <b>Office Plus</b> es tu mejor aliado para equipar tu espacio de
              trabajo.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <ButtonRed name="Compra Ahora" icon={<CartIcon />} />
              <ButtonTransparent name="Ver más" icon={<BoxIcon />} />
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10">
              <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left text-white/80 text-sm">
                <BoxCheckIcon />
                <span className="text-lg sm:text-xl font-bold text-white">
                  3,000+
                </span>
                <span>Productos</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left text-white/80 text-sm">
                <VanIcon />
                <span className="text-lg sm:text-xl font-bold text-white">
                  Envío
                </span>
                <span>Rápido</span>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left text-white/80 text-sm">
                <SecurityIcon />
                <span className="text-lg sm:text-xl font-bold text-white">
                  Garantía
                </span>
                <span>Total</span>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="w-full sm:w-1/2">
            <img
              className="w-full h-auto max-h-[480px] object-cover rounded-2xl shadow-2xl"
              src="/hero-image.jpg"
              alt="Productos y artículos de oficina Office Plus"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
