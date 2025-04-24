import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Me contacter - John Doe";
  }, []);

  return (
    <>
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: "url('/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 105, 255, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1
          }}
        ></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="text-center mb-4">Me contacter</h1>
          <div className="row">
            <div className="col-md-6 mb-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Téléphone</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Sujet</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-light">Envoyer</button>
              </form>
            </div>
            <div className="col-md-6">
              <h4>Coordonnées</h4>
              <p>John Doe<br />40 Rue Laure Diebold<br />69009 Lyon</p>
              <p>Téléphone : 06 20 30 40 50</p>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.887416428792!2d4.805531815674302!3d45.77869587910564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebef7c739087%3A0x6e6b8a394b0c807e!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1612789257277!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
