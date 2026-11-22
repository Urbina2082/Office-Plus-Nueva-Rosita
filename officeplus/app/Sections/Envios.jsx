
"use client";

import { useEffect, useRef } from "react";
import InitSection from "../Components/InitSection";
import CardEnvios from "../Sections/Components/CardEnvios";
import { MapIcon } from "../Components/Icons";

const Datos = [
  {
    icon: "🚚",
    title: "Envíos Gratis",
    description: "Compras entre $1,000 o más",
    t1: "📍 Aplica dentro de ",
    te1: "35 km",
    t2: "📍 Solo en la",
    te2: "Región Carbonífera",
  },
  {
    icon: "📍",
    title: "Costo de Envío",
    description: "Compras menores a $1,000",
    t1: "💲 Envío fijo de ",
    te1: "$100 pesos",
    t2: "💲 Aplica en: ",
    te2: "Sabinas, Rosita, Múzquiz y Barroterán",
  },
  {
    icon: "💵",
    title: "Envíos fuera de zona",
    description: "Compras entre $1,000 o más",
    t1: "⚠️ Más de 35 km o fuera de la ",
    te1: "Región Carbonífera",
    t2: "⚠️ Se realiza ",
    te2: "cotización personalizada",
  },
];

export default function Envios() {
  
const carouselRef = useRef(null);

useEffect(() => {
  const track = carouselRef.current;
  if (!track) return;

  const centerCard = () => {
    if (window.innerWidth >= 768) return;

    const cards = track.querySelectorAll("[data-envio-card]");
    const middleCard = cards[1];

    if (!middleCard) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = middleCard.getBoundingClientRect();

    track.scrollLeft +=
      cardRect.left -
      trackRect.left -
      (track.clientWidth - cardRect.width) / 2;
  };

  const frame = requestAnimationFrame(centerCard);

  window.addEventListener("resize", centerCard);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", centerCard);
  };
}, []);


  return (
    <div className="w-full min-w-0">
      <InitSection
        subtitle="Condiciones de Compra"
        title="Envíos y Entregas"
        description="Información importante sobre envíos y costos"
      />

     {/* CARRUSEL DE ENVÍOS */}
<div className="w-full min-w-0 px-4 sm:px-6 overflow-x-clip ">
  <div
    ref={carouselRef}
    className="
      flex w-full min-w-0 gap-4
      overflow-x-auto overflow-y-hidden
      snap-x snap-mandatory
      overscroll-x-contain
      pb-6 pt-8
      md:grid md:grid-cols-3
      md:gap-6
      md:overflow-visible
      md:max-w-6xl
      md:mx-auto
      md:px-2
    "
    style={{
      scrollbarWidth: "none",
      WebkitOverflowScrolling: "touch",
    }}
  >
    {Datos.map((a) => (
      <div
        key={a.title}
        data-envio-card
        className="
          flex-none
          w-[85%]
          max-w-[340px]
          snap-center
          md:w-full
          md:max-w-none
          md:min-w-0
        "
      >
        <CardEnvios {...a} />
      </div>
    ))}
  </div>
</div>
      {/* TIEMPOS DE ENTREGA */}
      <div className="w-full min-w-0 max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <InitSection
          subtitle="Servicio y cobertura"
          title="Tiempo de entregas"
          description="Llevamos tus productos hasta donde los necesitas."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* NUEVA ROSITA */}
          <div className="group min-w-0 bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <MapIcon />
              </div>
              <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1 rounded-full">
                Local
              </span>
            </div>

            <h4 className="text-xl font-bold text-zures mt-6">
              Nueva Rosita
            </h4>

            <p className="text-gray-400 text-xs mt-1">
              Tiempo estimado de entrega
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-rose-500">
                Mismo día
              </span>
            </div>
          </div>

          {/* SABINAS */}
          <div className="group min-w-0 bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <MapIcon />
              </div>
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                Regional
              </span>
            </div>

            <h4 className="text-xl font-bold text-zures mt-6">
              Sabinas
            </h4>

            <p className="text-gray-400 text-xs mt-1">
              Tiempo estimado de entrega
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-purple-600">
                24 horas
              </span>
            </div>
          </div>

          {/* MÚZQUIZ */}
          <div className="group min-w-0 bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
                <MapIcon />
              </div>
              <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
                Regional
              </span>
            </div>

            <h4 className="text-xl font-bold text-zures mt-6">
              Múzquiz
            </h4>

            <p className="text-gray-400 text-xs mt-1">
              Tiempo estimado de entrega
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-indigo-500">
                48 horas
              </span>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-7">
          Los tiempos de entrega son estimados.
        </p>
      </div>
    </div>
  );
}


