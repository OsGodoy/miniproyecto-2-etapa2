import React from "react";
import MainInfo from "../components/MainInfo";
import OtherDays from "../components/OtherDays";
import MoreInfo from "../components/MoreInfo";

export default function Home() {
  return (
    <>
      <MainInfo />
      <section className="w-full flex flex-col items-center justify-center">
        <OtherDays />
        <MoreInfo />
      </section>
    </>
  );
}
