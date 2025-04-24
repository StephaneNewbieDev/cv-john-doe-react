import { useEffect } from "react";
import Banner from "../components/Banner";

export default function Services() {
  useEffect(() => {
    document.title = "Services - John Doe";
  }, []);

  const services = [
    {
      icon: "fas fa-code",
      title: "Développement web",
      description:
        "Création de sites vitrines, blogs, e-commerce et applications sur mesure.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive design",
      description:
        "Sites adaptables sur tous types d’écrans : mobile, tablette, desktop.",
    },
    {
      icon: "fas fa-search",
      title: "Référencement SEO",
      description:
        "Optimisation du référencement naturel pour une meilleure visibilité.",
    },
  ];

  return (

    <><Banner title="SERVICES" image="/banner.jpg" /><section className="container py-5">
      <h1 className="text-center mb-4">Mes services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 text-center mb-4" key={index}>
            <div className="p-4 border rounded service-box">
              <i className={`${service.icon} fa-3x mb-3 service-icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section></>
  );
}
