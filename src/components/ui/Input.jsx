/**
 * Input Component
 *
 * Props:
 * - label: field label
 * - placeholder: placeholder text
 * - type: input type
 * - value: current value
 * - onChange: change handler
 * - error: error message
 */

function Input({
  label,
  placeholder = "",
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;