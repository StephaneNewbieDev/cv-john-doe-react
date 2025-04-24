import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Accueil - John Doe";
  }, []);

  return (
    <><header className="hero-section d-flex align-items-center justify-content-center text-center">
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

    </header><section id="about" className="bg-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="mb-3">À propos</h2>
              <hr className="text-primary w-25 mb-4" />
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                d’<strong> intégrateur-développeur web</strong> au CEF. Au cours de cette formation,
                j'ai pu acquérir des bases solides pour travailler dans le domaine du
                <strong> développement web</strong>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d’une alternance au sein d'une agence digitale
                pour consolider ma formation de <strong>développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1613162185079-574d1de9df0a?auto=format&fit=crop&w=600&q=80"
                alt="John Doe"
                className="img-fluid rounded mb-4" />
              <h4 className="fw-bold">Mes compétences</h4>
              <div className="mb-2">HTML5 90%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
              </div>
              <div className="mb-2">CSS3 80%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
              </div>
              <div className="mb-2">JavaScript 70%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
              </div>
              <div className="mb-2">PHP 60%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
              </div>
              <div className="mb-2">React 50%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  
  );
}
