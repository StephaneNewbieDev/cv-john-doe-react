import React, { useEffect, useState } from "react";

export default function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_URL = "https://api.github.com/users/github-john-doe";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur API");
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Chargement du profil...</p>;
  if (error)
    return <p className="text-center text-danger">Erreur de chargement.</p>;

  return (
    <div
      className="card shadow-lg border-0 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-body text-center">
        <img
          src={profile.avatar_url}
          alt="Avatar GitHub"
          className="rounded-circle mb-3 border border-3 border-primary"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <h4 className="fw-bold">{profile.name}</h4>
        <p className="text-muted mb-2">{profile.bio}</p>
        <ul className="list-unstyled mb-3">
          <li>
            <i className="fas fa-user text-primary me-2"></i>
            <strong>Nom d’utilisateur :</strong> {profile.login}
          </li>
          <li>
            <i className="fas fa-book text-primary me-2"></i>
            <strong>Repos publics :</strong> {profile.public_repos}
          </li>
          <li>
            <i className="fas fa-users text-primary me-2"></i>
            <strong>Followers :</strong> {profile.followers}
          </li>
          <li>
            <i className="fas fa-user-friends text-primary me-2"></i>
            <strong>Following :</strong> {profile.following}
          </li>
        </ul>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          Voir le profil GitHub
        </a>
      </div>
    </div>
  );
}
