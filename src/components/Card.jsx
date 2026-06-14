function Card({ title, description, emoji, color }) {
  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 ${color}`}
    >
      <div className="text-5xl mb-5">
        {emoji}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 font-semibold text-green-600">
        Learn More →
      </div>
    </div>
  );
}

export default Card;