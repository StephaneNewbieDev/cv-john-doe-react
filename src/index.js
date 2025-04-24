import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;
  if (window.scrollY > 200) {
    backToTop.classList.remove("d-none");
  } else {
    backToTop.classList.add("d-none");
  }
});
