import React from "react";

export default function ModalSearch({ isToggleSearch, setIsToggleSearch }) {
  return (
    <>
      <section
        className={`h-screen absolute bg-[#1E213A] z-50 inset-0 duration-500 flex flex-col items-center justify-start
        ${isToggleSearch ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="h-35 w-80 sm:w-100 lg:w-80 xl:w-100 p-4 flex flex-col items-center justify-center">
          <div className="w-full pb-2 flex items-center justify-end">
            <button
              onClick={() => setIsToggleSearch(false)}
              className="flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-200"
            >
              <img className="h-6" src="/images/close.svg" alt="" />
            </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-45 p-2 border-1 border-white/70 flex items-center justify-between">
              <img className="h-6" src="/images/search.svg" alt="" />
              <input
                className="text-white/80 w-32 outline-none text-start"
                type="text"
                placeholder="search location"
              />
            </div>
            <button className="h-6 py-5.5 px-4 text-white font-medium bg-blue-600 flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-200">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
