"use client";
import React, { useState } from "react";
import ModalProject from "./ModalProject";

const Box = ({
  projectName,
  projectDescription,
  projectImg,
  projectLinkGit,
  projectLinkDeploy,
  projectStack,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative lg:w-1/4 md:w-1/2 w-80 h-56 bg-gray-800 shadow-lg overflow-hidden float-left mb-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={projectImg}
        alt={projectName}
        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 transition-appear duration-300 ${
          isHovered ? "active" : ""
        }`}
      >
        <h4 className="text-white text-lg font-bold mb-2">{projectName}</h4>
        <p className="text-white text-sm text-center">{projectStack}</p>
        {isHovered && (
          <ModalProject
            projectName={projectName}
            projectDescription={projectDescription}
            projectImg={projectImg}
            projectLinkGit={projectLinkGit}
            projectLinkDeploy={projectLinkDeploy}
          />
        )}
      </div>
    </div>
  );
};

export default Box;
