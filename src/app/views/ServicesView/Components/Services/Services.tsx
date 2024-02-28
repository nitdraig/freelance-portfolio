import React from "react";
import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div className="text-center mx-2 lg:mx-10 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaMobileAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Landing Pages Maestras
            </h3>
            <p className="text-black">
              Impulsa tu presencia en línea con landing pages de vanguardia y
              altamente optimizadas para la conversión. Desde el diseño
              cautivador hasta las estrategias de llamado a la acción, creamos
              experiencias digitales que convierten visitantes en clientes.
            </p>
            <a>Leer más</a>
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
            <a>Leer más</a>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Consultoría Tecnológica para la Optimización Empresarial
            </h3>
            <p className="text-black">
              Transforma tu negocio con nuestra consultoría de TI. Implementamos
              tecnología para optimizar procesos diarios y mejorar la eficiencia
              operativa.
            </p>
            <a>Leer más</a>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Gestión de E-commerce:
            </h3>
            <p className="text-black">
              Crea y optimiza tu tienda en línea con nuestras soluciones de
              e-commerce. Desde la configuración inicial hasta la optimización
              del catálogo y la experiencia de usuario, maximizamos tus ventas
              en línea.
            </p>
            <a>Leer más</a>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaCode className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Construcción de Presencia Online Impactante
            </h3>
            <p className="text-black">
              Optimiza tu presencia en línea con nuestros servicios integrales.
              Desde la gestión de dominios hasta la optimización SEO y el
              despliegue en Google, te ayudamos a destacar en el vasto mundo
              digital. Aumenta tu visibilidad, fortalece tu marca y alcanza
              nuevos horizontes en internet.
            </p>
            <a>Leer más</a>
          </div>
          <div className="p-8 bg-third shadow-lg rounded-lg">
            <FaDesktop className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">
              Desarrollo de Aplicaciones Móviles
            </h3>
            <p className="text-black">
              Desarrollamos aplicaciones móviles de calidad que se adaptan a las
              necesidades específicas de tu negocio. Desde la conceptualización
              hasta el despliegue en las tiendas de aplicaciones, te ayudamos a
              llegar a tu audiencia en dispositivos móviles.
            </p>
            <a>Leer más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
