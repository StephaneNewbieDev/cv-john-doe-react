import { useEffect } from "react";
import Banner from "../components/Banner";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog - John Doe";
  }, []);

  const articles = [
    {
      title: "Coder son site en HTML/CSS",
      date: "22 août 2022",
      image: "/coder.jpg",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Vendre ses produits sur le web",
      date: "20 août 2022",
      image: "/croissance.jpg",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Se positionner sur Google",
      date: "1 août 2022",
      image: "/google.jpg",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Coder en responsive design",
      date: "31 juillet 2022",
      image: "/screens.jpg",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Techniques de référencement",
      date: "30 juillet 2022",
      image: "/seo.jpg",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Apprendre à coder",
      date: "12 juillet 2022",
      image: "/technos.png",
      excerpt: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ];

  return (
    <>
      <Banner title="BLOG" />
  
      <section className="bg-light py-5">
        <div className="container">
          <p className="text-center text-muted mb-4">
            Retrouvez ici quelques articles sur le développement web.
          </p>
          <div className="text-center">
            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#0d6efd",
                margin: "0 auto 30px"
              }}
            ></div>
          </div>
  
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.excerpt}</p>
                    <a href="#" className="btn btn-primary btn-sm mt-auto">
                      Lire la suite
                    </a>
                  </div>
                  <div className="card-footer text-muted small">
                    Publié le {article.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}