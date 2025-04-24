export default function Footer() {
  return (
    <>
      <footer className="bg-light text-dark pt-5 pb-4 mt-5">
        <div className="container">
          <div className="row text-center text-md-start">

            {/* Colonne 1 */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">John Doe</h5>
              <p>40 Rue Laure Diebold<br />69009 Lyon, France</p>
              <p>Téléphone : 06 20 30 40 50</p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
                <a href="#" className="text-dark"><i className="fab fa-github fa-lg"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-dark"><i className="fab fa-linkedin fa-lg"></i></a>
              </div>
            </div>

            {/* Colonne 2 */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Liens utiles</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-dark text-decoration-none">&raquo; Accueil</a></li>
                <li><a href="#about" className="text-dark text-decoration-none">&raquo; À propos</a></li>
                <li><a href="/contact" className="text-dark text-decoration-none">&raquo; Me contacter</a></li>
                <li><a href="/legal" className="text-dark text-decoration-none">&raquo; Mentions légales</a></li>
              </ul>
            </div>

            {/* Colonne 3 */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Mes dernières réalisations</h6>
              <ul className="list-unstyled">
                <li><a href="/projects" className="text-dark text-decoration-none">&raquo; Fresh food</a></li>
                <li><a href="/projects" className="text-dark text-decoration-none">&raquo; Restaurant Akira</a></li>
                <li><a href="/projects" className="text-dark text-decoration-none">&raquo; Espace bien-être</a></li>
              </ul>
            </div>

            {/* Colonne 4 */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Mes derniers articles</h6>
              <ul className="list-unstyled">
                <li><a href="/blog" className="text-dark text-decoration-none">&raquo; Coder son site en HTML/CSS</a></li>
                <li><a href="/blog" className="text-dark text-decoration-none">&raquo; Vendre ses produits sur le web</a></li>
                <li><a href="/blog" className="text-dark text-decoration-none">&raquo; Se positionner sur Google</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-dark text-white text-center py-2">
        <small>&copy; Designed by John Doe</small>
      </div>
    </>
  );
}
