/**
 * Loader Component
 *
 * Props:
 * - size: "sm" | "md" | "lg"
 */

function Loader({ size = "md" }) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <div
      className={`
        border-4
        border-green-200
        border-t-green-600
        rounded-full
        animate-spin
        ${sizes[size]}
      `}
    />
  );
}

export default Loader;