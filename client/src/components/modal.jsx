import React, { useState } from "react";
import { motion } from "motion/react";
import { Button, Modal } from "antd";

//MODAL GENERAL COMPONENTE
export default function ModalComponent({ children, title, header }) {
  const buttonStyle = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className:
      "flex justify-center items-center cursor-pointer border lg:h-8 lg:w-25 lg:mt-4 border-gray-500 shadow-lg rounded-full py-2 px-4 transition-colors hover:bg-gray-600 hover:text-white",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* see more button */}
      <motion.button {...buttonStyle} onClick={showModal}>
        <span className="text-sm font-medium">{title}</span>
      </motion.button>

      <Modal
        title={header}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        centered={true}
        width="60svw"
        height="90svh"
        footer={null}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          {children}

          <motion.button {...buttonStyle} onClick={handleCancel}>
            <span className="text-sm">Close</span>
          </motion.button>
        </div>
      </Modal>
    </>
  );
}

  // Trocea la descripción por "-" y limpia espacios/vacíos (MODAL BOLSOS)
  function formatDescription(description) {
    if (!description) return [];
    return description
      .split("-")
      .map((line) => line.trim())
      .filter(Boolean);
  }

  //MODAL PARA LOS BOLSOS
  export function BagModal({ bag, open, onClose }) {
    // Si no hay bolso seleccionado, no mostramos nada
    if (!bag) return null;

    return (
      <Modal open={open} onCancel={onClose} footer={null} centered width={720}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Imagen */}
          <img
            src={bag.src}
            alt={bag.name}
            className="w-full md:w-1/2 h-80 object-cover rounded-xl"
          />

          {/* Información */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold uppercase">{bag.name}</h2>

            {formatDescription(bag.description).length > 0 && (
              <ul className="space-y-1 text-sm leading-relaxed text-gray-500 list-disc list-inside pt-2 pr-2">
                {formatDescription(bag.description).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Modal>
    );
  }
