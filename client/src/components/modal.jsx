import React, { useState } from "react";
import { motion } from "motion/react";
import { Button, Modal } from "antd";

//MODAL GENERAL COMPONENTE
export default function ModalComponent({ children, title, header }) {
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
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center items-center cursor-pointer border w-[svw20] border-gray-500 shadow-lg rounded-full py-2 px-4 transition-colors hover:bg-gray-600 hover:text-white"
        onClick={showModal}
      >
        <span>{title}</span>
      </motion.button>

      <Modal
        title={header}
        closable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        width="60svw"
        height="90svh"
        rootClassName="clean-modal"
        footer={
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key="close"
              className="text-center cursor-pointer border border-gray-500 shadow-lg rounded-lg outline-none py-2 px-4 transition-colors hover:bg-gray-600 text-red-600 hover:text-white"
              onClick={handleCancel}
            >
              <span>Close</span>
            </motion.button>
          </div>
        }
        destroyOnHidden
      >
        {children}
      </Modal>
    </>
  );
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
          <h2 className="text-2xl font-semibold">{bag.name}</h2>
          <p className="mt-2 text-lg text-neutral-600">{bag.price}</p>
          <p className="mt-4 text-sm text-neutral-500">{bag.description}</p>
        </div>
      </div>
    </Modal>
  );
}
