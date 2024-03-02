import React from "react";
import { TfiWrite } from "react-icons/tfi";

const Why = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#0F0F0F] via-gray-900 to-[#0F0F0F] pt-10 w-screen"
      id="whyme"
    >
      <h2 className="p-12 text-center uppercase tracking-[8px] text-white text-2xl lg:text-3xl  lg:pt-6 pb-8">
        <span className="bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent animate-shine">
          ¿Por qué elegirme?
        </span>
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div className=" mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl mt-10 text-white mb-6">
            En un mercado saturado de opciones, sé que la elección del socio
            adecuado para tu proyecto digital puede ser abrumadora. <br />
            Permíteme explicarte por qué mi enfoque y compromiso marcan la
            diferencia:
          </p>
          <h3 className="lg:text-2xl text-3xl text-purple-400 mb-6">SAPQS</h3>
          <ul className="text-lg text-white">
            <li>Simplicity - Simplicidad</li>
            <li>Approach - Enfoque</li>
            <li>Personalization- Personalización</li>
            <li>Quality - Calidad</li>
            <li>Success - Éxito</li>
          </ul>
          <div>
            <div className="mb-4 mt-4 flex justify-center items-center">
              <img src="/4.svg" alt="Diagrama de flujo" className="w-full  " />
            </div>
            <p className="text-2xl text-white mb-8 font-semibold">
              En este diagrama te muestro mi proceso de acompañamiento para
              hacer que tu proyecto tenga el éxito y la calidad más alta
              posible.
            </p>
            <div className="text-center flex justify-center">
              <a
                href="/#contact"
                className="text-lg bg-gray-200 rounded-md px-10 py-2 flex font-bold items-center text-[#0c0c0c] hover:text-[#6A0DAD]"
              >
                Presupuestar <TfiWrite className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
