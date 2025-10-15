import React from "react";

export default function TemperatureBar({ temperature = 30 }) {
  const maxTemp = 40;
  const percent = Math.min((temperature / maxTemp) * 100, 100);

  let color = "bg-sky-300";
  if (temperature >= 30) color = "bg-rose-500";
  else if (temperature >= 20) color = "bg-amber-500";
  else if (temperature >= 10) color = "bg-yellow-200";

  return (
    <>
      <section className="w-70 flex flex-col items-center justify-center">
        <div className="text-white/80 text-sm mb-1 w-50 flex items-center justify-between">
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </div>
        <div className="w-50 h-2 bg-gray-600 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} rounded-full transition-all duration-700 ease-in-out`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div className="w-50 py-1 text-end">%</div>
      </section>
    </>
  );
}
