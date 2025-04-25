import { useEffect } from "react";
import Banner from "../components/Banner";

export default function Projects() {
  useEffect(() => {
    document.title = "Réalisations - John Doe";
  }, []);

  const projects = [
    {
      title: "Fresh food",
      image: "/fresh-food.jpg", // à remplacer par tes vraies images
      description: "Réalisation d’un site avec commande en ligne.",
      tech: "Site réalisé avec PHP et MySQL",
      link: "#",
    },
    {
      title: "Restaurant Akira",
      image: "/restaurant-japonais.jpg",
      description: "Réalisation d’un site vitrine.",
      tech: "Site réalisé avec WordPress",
      link: "#",
    },
    {
      title: "Espace bien-être",
      image: "/espace-bien-etre.jpg",
      description: "Site vitrine pour un praticien de bien-être.",
      tech: "Site réalisé en HTML/CSS",
      link: "#",
    },
  ];

  return (
    <>
      <Banner title="REALISATIONS" image="/banner.jpg" />

      <section className="container py-5">
        <h1 className="text-center">PORTFOLIO</h1>
        <p className="text-center text-muted mb-4">
          Voici quelques-unes de mes réalisations.
        </p>
        <div className="text-center">
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#0d6efd",
              margin: "0 auto 30px",
            }}
          ></div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-outline-primary">
                    Voir
                  </a>
                </div>
                <div className="card-footer text-center text-muted small">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
