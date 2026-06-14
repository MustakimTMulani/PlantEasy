function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        backgroundColor: "#e8f5e9",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#2e7d32",
          marginBottom: "20px",
        }}
      >
        Grow Smarter with PlantEasy
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Your digital companion for plant care, crop guidance,
        agricultural knowledge, and smart cultivation.
      </p>

      <button
        style={{
          backgroundColor: "#2e7d32",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}

export default Hero;