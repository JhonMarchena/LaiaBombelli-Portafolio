import { Modal } from "antd";

export default function BagModal({ bag, open, onClose }) {
  // Si no hay bolso seleccionado, no mostramos nada
  if (!bag) return null;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={720}
    >
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