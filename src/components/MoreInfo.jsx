import React from "react";
import TemperatureBar from "./TemperatureBar";
import Footer from "./Footer";

export default function MoreInfo() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center ">
        <div className="w-70 sm:w-140 md:w-165 flex items-center justify-start">
          <h2 className="font-bold text-2xl text-white/80">
            Today's Hightlights
          </h2>
        </div>
        <div className="md:md:w-165 grid grid-cols-1 sm:grid-cols-2 gap-x-4 place-items-center">
          <section className="w-70 md:w-80 h-60 bg-[#1E213A] mt-4 flex flex-col items-center justify-center">
            <div className="text-white/80 flex flex-col items-center justify-center">
              <h3 className="text-lg p-6">Wind status</h3>
              <div className="pb-4 gap-1 flex items-center justify-center">
                <p className="font-bold text-6xl">1.34</p>
                <p className="font-normal text-4xl">ms</p>
              </div>
              <div className="p-6 gap-3 flex items-center justify-center">
                <div className="h-8 w-8 p-1.5 bg-white/20 rounded-full">
                  <img src="/images/navigation.svg" alt="" />
                </div>
                <p>ENE</p>
              </div>
            </div>
          </section>
          <section className="w-70 md:w-80 h-60 bg-[#1E213A] mt-4 flex flex-col items-center justify-center">
            <div className="text-white/80 flex flex-col items-center justify-center">
              <h3 className="text-lg p-6">Humidity</h3>
              <div className="pb-4 gap-1 flex items-center justify-center">
                <p className="font-bold text-6xl">86</p>
                <p className="font-normal text-4xl">%</p>
              </div>
              <div className="pb-3 gap-3 flex items-center justify-center">
                <TemperatureBar />
              </div>
            </div>
          </section>
          <section className="w-70 md:w-80 h-40 bg-[#1E213A] mt-4 flex flex-col items-center justify-center">
            <div className="text-white/80 flex flex-col items-center justify-center">
              <h3 className="text-lg p-2">Visibility</h3>
              <div className="pb-4 gap-1 flex items-center justify-center">
                <p className="font-bold text-6xl">10.00</p>
                <p className="font-normal text-4xl">km</p>
              </div>
            </div>
          </section>
          <section className="w-70 md:w-80 h-40 bg-[#1E213A] mt-4 flex flex-col items-center justify-center">
            <div className="text-white/80 flex flex-col items-center justify-center">
              <h3 className="text-lg p-2">Air Pressure</h3>
              <div className="pb-4 gap-1 flex items-center justify-center">
                <p className="font-bold text-6xl">1016</p>
                <p className="font-normal text-4xl">mb</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </section>
    </>
  );
}
