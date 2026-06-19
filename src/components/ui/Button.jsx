/**
 * Button Component
 *
 * Props:
 * - children: Button text/content
 * - variant: "primary" | "secondary" | "outline"
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 * - onClick: function
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl
        font-medium
        transition
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;