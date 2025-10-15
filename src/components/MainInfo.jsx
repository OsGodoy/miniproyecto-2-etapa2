import React, { useState } from "react";
import ModalSearch from "./ModalSearch";

export default function MainInfo() {
  const [isToggleSearch, setIsToggleSearch] = useState(false);

  return (
    <>
      <section className="h-screen lg:w-80 xl:w-100 2xl:w-180 relative bg-[#1E213A] flex flex-col items-center justify-start">
        <ModalSearch
          isToggleSearch={isToggleSearch}
          setIsToggleSearch={setIsToggleSearch}
        />
        <div className="h-screen inset-0 absolute opacity-8 bg-[url(/images/Cloud-background.png)] bg-[length:500px_300px] bg-[position:50%_15%] bg-no-repeat z-10"></div>
        <section className="w-80 sm:w-100 lg:w-80 xl:w-100 relative z-40 flex items-center justify-center">
          <div className="w-full p-7 flex items-center justify-between">
            <button
              onClick={() => setIsToggleSearch(true)}
              className="text-gray-200 bg-gray-500 p-2 px-6 hover:cursor-pointer hover:scale-105 duration-200"
            >
              Search for Places
            </button>
            <img
              className="bg-gray-500 rounded-full p-2 h-10 hover:cursor-pointer hover:scale-105 duration-200"
              src="./images/location.svg"
              alt=""
            />
          </div>
        </section>
        <section className="h-80 flex items-center justify-center">
          <div className="w-35 flex items-center justify-center">
            <img src="/images/weather/03d.png" alt="" />
          </div>
        </section>
        <section>
          <div className="mt-8 gap-12 text-white/80 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <h2 className="text-9xl font-semibold">16</h2>
              <p className="text-7xl font-light">°c</p>
            </div>
            <p className="font-semibold text-3xl">Broken Clouds</p>
            <p>
              Today&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;<span>Mon, 13 Oct</span>
            </p>
            <div className="gap-2 flex items-center justify-center">
              <img className="size-5" src="/images/location_on.svg" alt="" />
              <p>Medellín</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
