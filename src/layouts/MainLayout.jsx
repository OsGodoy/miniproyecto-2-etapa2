import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <main className="bg-[#100E1D] min-h-screen flex flex-col">
        <section className="flex flex-col lg:flex-row">
          <Outlet />
        </section>
      </main>
    </>
  );
}
