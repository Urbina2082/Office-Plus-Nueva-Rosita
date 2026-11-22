export function ButtonClasic(props) {
  return (
    <button
      className="text-md sm:text-base font-light bg-blue-but text-white px-8 py-2 
    rounded-full  hover:bg-blue-600 hover:scale-107 transition-all duration-300 "
    >
      {props.name}
    </button>
  );
}

export function ButtonRed(props) {
  return (
    <button
      className="text-md sm:text-base  reds text-white px-8 py-3
    rounded-full  hover:scale-107 transition-all duration-300  flex justify-center items-center gap-2 min-w-50"
    >
      {props.icon}
      {props.name}
    </button>
  );
}

export function ButtonTransparent(props) { 
  return (
    <button
      className="text-md min-w-50 sm:text-base  bg-gradient-to-br from-white/20 via-white/10 to-transparent 
      border border-white/10 shadow- [inset_0_1px_2px_rgba(255,255,255,0.5),0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm border-t border-l border-white/40 border-b border-r border-white/10 text-white px-8 py-2
    rounded-full  hover:scale-107 transition-all duration-300  flex justify-center items-center gap-2"
    >
      {props.icon}
      {props.name}
    </button>
  );
}

export function ButtonWhatsapp(props) { 
  return (
    <button
       className="text-md min-w-50 sm:text-base  bg-gradient-to-br from-white/20 via-white/10 to-transparent 
      border border-white/10 shadow- [inset_0_1px_2px_rgba(255,255,255,0.5),0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm border-t border-l border-white/40 border-b border-r border-white/10 text-white px-8 py-2
    rounded-full  hover:scale-107 transition-all duration-300  flex justify-center items-center gap-2"
    >
      {props.icon}
      {props.name}
    </button>
  );
}

