import React from "react";
import Box from "./Box";
import { projectLists } from "../../../../locals/var";

const Projects = () => {
  return (
    <section
      className=" bg-gradient-to-r from-one via-gray-900 to-one  w-screen"
      id="projects"
    >
      <h2 className="  p-12 text-center uppercase tracking-[8px] text-gray-100 text-2xl lg:pt-6 pb-8">
        Mis casos de éxitos
      </h2>
      <span className="h-[1.1px] px-10 absolute w-full bg-gray-300 block"></span>
      <div className="">
        <p className="text-white text-lg text-center mt-6">
          Varios de los proyectos donde he colaborado
        </p>
        <div className="mt-6 w-max-[1349px]  ">
          <div className="flex flex-wrap justify-center ">
            {projectLists.map((project: any, i: any) => (
              <Box key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
