import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function ModalProject({
  projectImg,
  projectName,
  projectDescription,
  projectLinkGit,
  projectLinkDeploy,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className=" bg-[#6A0DAD] mt-2 hover:bg-gray-200 font-bold hover:text-[#6A0DAD] text-white  rounded-lg px-4 py-2"
        onPress={onOpen}
      >
        Leer más
      </Button>
      <Modal
        placement={"center"}
        scrollBehavior={"inside"}
        size={"xl"}
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onClose}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent className="bg-[#212529] ">
          <ModalHeader className="text-white text-2xl ">
            {projectName}
          </ModalHeader>
          <ModalBody>
            <Image
              src={projectImg}
              className="image_modal rounded-lg"
              alt={projectName}
            />
            <p className="text-white">{projectDescription}</p>
          </ModalBody>
          <ModalFooter>
            <div className="flex justify-between items-start mb-4 w-full">
              <div className="flex space-x-4">
                <Link href={projectLinkGit} target="_blank">
                  <BsGithub
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-[#bf60ff] "
                  />
                </Link>
                <Link href={projectLinkDeploy} target="_blank">
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer text-white hover:text-[#bf60ff] "
                  />
                </Link>
              </div>
              <Button
                className="bg-[#bd2f2f]  hover:bg-gray-200 hover:text-[#6A0DAD] text-white font-semibold  rounded-lg px-4 py-2"
                onPress={onClose}
              >
                Cerrar
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
