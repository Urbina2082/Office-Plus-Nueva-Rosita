
export default function CardEnvios(props) {
  return (
    <article className="relative group box-border w-full min-w-0 min-h-90 text-center card-gradient-border px-5 py-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="absolute -top-8 left-1/2 -translate-x-1/2 shadow-xl w-17 h-17 p-4 rounded-full bg-white text-2xl flex items-center justify-center">
        {props.icon}
      </div>

      <h4 className="text-2xl font-bold mt-4 text-zures">
        {props.title}
      </h4>

      <div className="h-1 w-24 bg-gradient-red rounded-lg mx-auto my-4" />

      <p className="text-black/70 break-words">
        {props.description}
      </p>

      <div className="w-full min-w-0 text-left text-indigo-600/90 mt-4 bg-blue-500/20 rounded-lg px-4 py-2">
        <p className="break-words">
          {props.t1} <b>{props.te1}</b>
        </p>
      </div>

      <div className="w-full min-w-0 text-left text-indigo-600/90 mt-4 bg-blue-500/20 rounded-lg px-4 py-2">
        <p className="break-words">
          {props.t2} <b>{props.te2}</b>
        </p>
      </div>

    </article>
  );
}
