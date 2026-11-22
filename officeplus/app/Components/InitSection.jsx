import Line from "./Line";

export default function InitSection(props) {
  return (
    <div className="text-center mt-12  mb-10">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
        {props.subtitle}
      </span>

      <h3 className="text-3xl sm:text-4xl font-bold text-zures mt-3">
       {props.title}
      </h3>

      <p className="text-gray-500 text-sm sm:text-base mt-3">
        {props.description}
      </p>

      <div className="flex justify-center mt-5">
        <Line />
      </div>
    </div>
  );
}
