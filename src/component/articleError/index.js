import React from "react";
//import "./errorArticle.css";
function ArticleError() {
  return (
    <div className="error-container">
    <div className="error-icon">❌</div>
    <p className="error-text">Ocurrió un error</p>
  </div>
  );
}

export { ArticleError };