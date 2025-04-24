export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Colonne 1 : Infos perso */}
          <div className="col-md-3 mb-4">
            <h5>John Doe</h5>
            <p>
              123 rue des Développeurs
              <br />
              75000 Paris
            </p>
            <p>Tél : 01 23 45 67 89</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-white"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens principaux */}
          <div className="col-md-3 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/legal" className="text-white">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-3 mb-4">
            <h5>Réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/projects" className="text-white">
                  Projet 1
                </a>
              </li>
              <li>
                <a href="/projects" className="text-white">
                  Projet 2
                </a>
              </li>
              <li>
                <a href="/projects" className="text-white">
                  Projet 3
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Articles récents */}
          <div className="col-md-3 mb-4">
            <h5>Derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/blog" className="text-white">
                  Article 1
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white">
                  Article 2
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white">
                  Article 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bas de footer */}
        <div className="d-flex justify-content-between flex-column flex-md-row align-items-center">
          <p className="mb-0">&copy; 2025 John Doe. Tous droits réservés.</p>
          <a
            href="#"
            id="backToTop"
            className="text-white text-decoration-none d-none"
          >
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
}
