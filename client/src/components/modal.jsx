import React, { useState } from "react";
import { motion } from "motion/react";
import { Button, Modal } from "antd";

function ModalComponent({ children, title, header }) {
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
        className=" cursor-pointer border border-gray-500 shadow-lg rounded-full py-2 px-8 transition-colors hover:bg-gray-600 hover:text-white"
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
        footer={
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key="close"
              className="text-center cursor-pointer border border-gray-500 shadow-lg rounded-lg outline-none py-2 px-5 transition-colors hover:bg-gray-600 hover:text-white"
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
export default ModalComponent;
