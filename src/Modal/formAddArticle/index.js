import React from "react";
import "./form.css";
import { ComponentContext } from "../../component/componentContext";


function FormAddArticle() {
    const {
        addArticle,
        setOpenModal,
    } = React.useContext(ComponentContext);
    const [newArticle, setnewArticle] = React.useState("");  // Estado para manejar el valor del textarea

    const onSubmit = (event) => {
        event.preventDefault();
        addArticle(newArticle);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setnewArticle(event.target.value);  // Actualiza el valor del mensaje
    };

    return (
        <div className="modalContainer">
            <h2>Agregar Información</h2>
            <form onSubmit={onSubmit}>
                <textarea
                    name="message"
                    value={newArticle}  
                    onChange={onChange}  
                />
                <button type="submit">Guardar</button>
                <button className="closeButton"
                    onClick={onCancel}>✖</button>
            </form >


        </div>
    )
}

export { FormAddArticle };