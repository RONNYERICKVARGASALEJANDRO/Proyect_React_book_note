import React from "react";
import { ComponentContext } from "./componentContext";

function CompTitle(){
  const{completedArticle,
    totalArticle

 } = React.useContext(ComponentContext)
    return(
      <h1 className="TitlePrincipal">
        Article Motors <span>{completedArticle}</span> de <span>{totalArticle} </span>
      </h1>
  
    );
  }

  export {CompTitle};