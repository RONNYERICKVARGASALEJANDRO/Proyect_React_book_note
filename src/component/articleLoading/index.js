import React from "react";
import "./loadingArticle.css";
function ArticleLoading() {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
}

export { ArticleLoading };