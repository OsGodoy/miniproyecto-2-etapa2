import React, { useState } from "react";

export default function OtherDays() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [isFaren, setIsFaren] = useState(false);

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-70 sm:w-100 md:w-170 flex items-center justify-end gap-4">
          <button
            onClick={() => {
              setIsCelsius(true), setIsFaren(false);
            }}
            className={`h-12 w-12 rounded-full relative flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-200
            ${isCelsius ? "bg-white/80" : "bg-[#686b8d]"}
            `}
          >
            <h3 className="text-[#100E1D] font-bold text-2xl absolute top-2 right-4">
              °C
            </h3>
          </button>
          <button
            onClick={() => {
              setIsFaren(true), setIsCelsius(false);
            }}
            className={`h-12 w-12 rounded-full relative flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-200
            ${isFaren ? "bg-white/80" : "bg-[#686b8d]"}
            `}
          >
            <h3 className="text-[#100E1D] font-bold text-2xl absolute top-2 right-4">
              °F
            </h3>
          </button>
        </div>
        <div className="w-70 sm:w-100 md:w-170 mt-6 gap-y-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center">
          <div className="w-30 h-45 p-2 gap-3 text-white/90 font-medium bg-[#1E213A] flex flex-col items-center justify-center">
            <h3>Tomorrow</h3>
            <img className="w-20" src="/images/weather/01d.png" alt="" />
            <p>
              23°C &nbsp; <span className="text-white/50">13°C</span>{" "}
            </p>
          </div>
          <div className="w-30 h-45 p-2 gap-3 text-white/90 font-medium bg-[#1E213A] flex flex-col items-center justify-center">
            <h3>Tomorrow</h3>
            <img className="w-20" src="/images/weather/01d.png" alt="" />
            <p>
              23°C &nbsp; <span className="text-white/50">13°C</span>{" "}
            </p>
          </div>
          <div className="w-30 h-45 p-2 gap-3 text-white/90 font-medium bg-[#1E213A] flex flex-col items-center justify-center">
            <h3>Tomorrow</h3>
            <img className="w-20" src="/images/weather/01d.png" alt="" />
            <p>
              23°C &nbsp; <span className="text-white/50">13°C</span>{" "}
            </p>
          </div>
          <div className="w-30 h-45 p-2 gap-3 text-white/90 font-medium bg-[#1E213A] flex flex-col items-center justify-center">
            <h3>Tomorrow</h3>
            <img className="w-20" src="/images/weather/01d.png" alt="" />
            <p>
              23°C &nbsp; <span className="text-white/50">13°C</span>{" "}
            </p>
          </div>
          <div className="w-30 h-45 p-2 gap-3 text-white/90 font-medium bg-[#1E213A] flex flex-col items-center justify-center">
            <h3>Tomorrow</h3>
            <img className="w-20" src="/images/weather/01d.png" alt="" />
            <p>
              23°C &nbsp; <span className="text-white/50">13°C</span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
