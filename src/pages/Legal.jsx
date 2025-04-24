import { useEffect } from "react";

export default function Legal() {
  useEffect(() => {
    document.title = "Mentions légales - John Doe";
    // Ajoute la balise noindex dynamiquement
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Mentions légales</h1>

      <div className="accordion" id="legalAccordion">
        {/* ÉDITEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditor" aria-expanded="true" aria-controls="collapseEditor">
              Éditeur du site
            </button>
          </h2>
          <div id="collapseEditor" className="accordion-collapse collapse show" aria-labelledby="headingEditor" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              <strong>John Doe</strong><br />
              40 Rue Laure Diebold<br />
              69009 Lyon, France<br />
              Téléphone : 06 20 30 40 50<br />
              Email : johndoe@example.com
            </div>
          </div>
        </div>

        {/* HÉBERGEUR */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHost">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHost" aria-expanded="false" aria-controls="collapseHost">
              Hébergeur du site
            </button>
          </h2>
          <div id="collapseHost" className="accordion-collapse collapse" aria-labelledby="headingHost" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              CodeSandbox / GitHub Pages<br />
              https://codesandbox.io<br />
              https://pages.github.com
            </div>
          </div>
        </div>

        {/* CRÉDITS */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCredits" aria-expanded="false" aria-controls="collapseCredits">
              Crédits
            </button>
          </h2>
          <div id="collapseCredits" className="accordion-collapse collapse" aria-labelledby="headingCredits" data-bs-parent="#legalAccordion">
            <div className="accordion-body">
              Icônes par <a href="https://fontawesome.com" target="_blank" rel="noreferrer">Font Awesome</a><br />
              Images libres de droits provenant de <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a><br />
              Images fictives générées via <a href="https://picsum.photos" target="_blank" rel="noreferrer">Picsum.photos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
