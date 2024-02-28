import React from "react";
import { FaDesktop, FaMobileAlt, FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section
      className="bg-gradient-to-r from-one via-gray-900 to-one  h-full"
      id="services"
    >
      <h2 className="p-12 text-center uppercase tracking-[8px] text-gray-100 text-2xl lg:pt-6 pb-8">
        Servicios
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div className="text-center mx-4 lg:mx-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaMobileAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Landing Pages Maestras
            </h3>
            <p className="text-black">
              Impulsa tu presencia en línea con landing pages de vanguardia y
              altamente optimizadas para la conversión. Creando experiencias
              digitales que convierten visitantes en clientes.
            </p>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaDesktop className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Desarrollo Integral de Webapps
            </h3>
            <p className="text-black">
              Construimos webapps completas desde cero, integrando a la
              perfección tanto el backend como el frontend para ofrecerte
              soluciones tecnológicas robustas y escalables.
            </p>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Consultoría Tecnológica para la Optimización Empresarial
            </h3>
            <p className="text-black">
              Transforma tu negocio con una consultoría de TI. Implemención de
              tecnología para optimizar procesos diarios y mejorar la eficiencia
              operativa.
            </p>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Gestión de E-commerce
            </h3>
            <p className="text-black">
              Crea y optimiza tu tienda en línea con soluciones de e-commerce.
              Desde la configuración inicial hasta la optimización del catálogo
              y la experiencia de usuario, maximizando tus ventas en línea.
            </p>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Construcción de Presencia Online Impactante
            </h3>
            <p className="text-black">
              Optimiza tu presencia en línea. Desde la gestión de dominios hasta
              la optimización SEO y el despliegue en Google. Aumenta tu
              visibilidad, fortalece tu marca y alcanza nuevos horizontes en
              internet.
            </p>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaDesktop className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Servicio personalizado
            </h3>
            <p className="text-black">
              Desarrollo acorde a tus necesidades, las de tu proyecto y tu
              economia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
