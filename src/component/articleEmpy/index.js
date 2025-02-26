import React from "react";
import "./empyArticle.css";
function ArticleEmpy() {
  return (
    <div className="danger-container">
      <div className="danger-icon">⚠️</div>
      <p className="danger-text">¡Atención, no existe ese articulo!</p>
    </div>
    );
}

export { ArticleEmpy };