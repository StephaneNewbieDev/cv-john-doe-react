import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Accueil - John Doe";
  }, []);

  return (
    <header className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="hero-content text-white px-3">
        <h1 className="display-4 fw-bold">Bienvenue sur mon CV en ligne</h1>
        <h2 className="fs-4 mb-4">
          Je suis John Doe, développeur web full-stack
        </h2>
        <a href="#about" className="btn btn-primary btn-lg">
          En savoir plus
        </a>
      </div>
    </header>
  );
}
