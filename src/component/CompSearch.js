import React from "react";
import { ComponentContext } from "./componentContext";

function CompSearch(){
  const {searchValue, setSearchValue
  } = React.useContext(ComponentContext)
  return (
    <div className="input-container">
      <label>Buscar:</label>
      <input name="Buscar" placeholder="escribe el articulo aqui." type="search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
        }}
      />
    </div>
  );
}

export { CompSearch };