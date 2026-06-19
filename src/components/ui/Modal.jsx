import { useEffect } from "react";

/**
 * Modal Component
 *
 * Props:
 * - isOpen: boolean
 * - onClose: function
 * - title: modal title
 * - children: modal content
 */

function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>

        </div>

        {children}

      </div>

    </div>
  );
}

export default Modal;