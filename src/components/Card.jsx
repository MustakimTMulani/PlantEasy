function Card({ title, description, emoji, color }) {
  return (
    <div
      className={`group bg-white rounded-3xl p-8 border ${color} shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
    >
      <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-6">
        {emoji}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      <button className="text-green-600 font-semibold group-hover:translate-x-1 transition">
        Learn More →
      </button>
    </div>
  );
}

export default Card;