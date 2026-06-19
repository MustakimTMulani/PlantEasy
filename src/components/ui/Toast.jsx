import { useEffect } from "react";

/**
 * Toast Component
 *
 * Props:
 * - message: toast message
 * - isVisible: boolean
 * - onClose: function
 * - duration: number (ms)
 */

function Toast({
  message,
  isVisible,
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50">
      {message}
    </div>
  );
}

export default Toast;