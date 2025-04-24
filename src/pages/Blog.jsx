import React from 'react';

const blogArticles = [
  {
    id: 1,
    title: "Coder son site en HTML/CSS",
    image: "/coder.jpg",
    date: "22 août 2022",
  },
  {
    id: 2,
    title: "Vendre ses produits sur le web",
    image: "/assets/img/blog2.jpg",
    date: "20 août 2022",
  },
  {
    id: 3,
    title: "Se positionner sur Google",
    image: "/assets/img/blog3.jpg",
    date: "1 août 2022",
  },
  {
    id: 4,
    title: "Coder en responsive design",
    image: "/assets/img/blog4.jpg",
    date: "31 juillet 2022",
  },
  {
    id: 5,
    title: "Techniques de référencement",
    image: "/assets/img/blog5.jpg",
    date: "30 juillet 2022",
  },
  {
    id: 6,
    title: "Apprendre à coder",
    image: "/assets/img/blog6.jpg",
    date: "12 juillet 2022",
  },
];

export default function Blog() {
  return (
    <>
      {/* BANDEAU VISUEL */}
      <div className="w-100" style={{
        backgroundImage: "url('/assets/img/banner-blog.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px"
      }}></div>

      {/* TITRE + SOUS-TITRE */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="fw-bold">BLOG</h1>
          <p className="lead mb-4">Retrouvez ici quelques articles sur le développement web.</p>
          <div style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#0d6efd",
            margin: "0 auto"
          }}></div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="container py-5">
        <div className="row g-4">
          {blogArticles.map((article) => (
            <div className="col-md-6 col-lg-4" key={article.id}>
              <div className="card h-100 shadow-sm">
                <img src={article.image} className="card-img-top" alt={article.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary mt-auto">Lire la suite</a>
                  <small className="text-muted mt-3">Publié le {article.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
