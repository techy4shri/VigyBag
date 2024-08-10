import React from "react";
import app from "../../../assets/app.png";

function Header() {
  return (
    <>
      <header className="relative h-96 md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.vigybag.com/assets/Logo-HJo2K1MQ.svg"
            alt="Background"
            className="w-full h-full object-cover filter blur-sm"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-green-400">
            About Us
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-blue-400">
            Welcome to VigyBag!
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto text-green-400">
            Revolutionizing eco-friendly shopping with innovative technology and
            sustainable practices.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
