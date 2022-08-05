import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <main className="min-h-screen border-2 border-black bg-green-50">
        <Navbar />
        <section className="min-h-[calc(100vh-4.25rem)] flex flex-col items-center justify-center">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Home;
