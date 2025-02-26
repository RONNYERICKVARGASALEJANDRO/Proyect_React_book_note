import React from "react";
import { useLocalStorege } from "./useLocalStore";

const ComponentContext = React.createContext();

function ComponentProvider({ children }) {
    const {
        item: articles,
        saveItem: saveArticle,
        loading,
        error
    } = useLocalStorege("Motors-Article_v1", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const completedArticle = articles.filter(article => !!article.completed).length;
    const totalArticle = articles.length;
    const searchArticles = articles.filter((article) => {
        const articleText = article.Text ? article.Text.toLowerCase() : ""; // Usa una cadena vacía si no existe Text
        const searchText = searchValue.toLowerCase();
        return articleText.includes(searchText)
    });

    

    const complidArticle = (text) => {
        const newArticles = [...articles];
        const articleIndex = newArticles.findIndex((article) => article.Text === text);
        newArticles[articleIndex].completed = !newArticles[articleIndex].completed;
        saveArticle(newArticles)
    }

    const deleteArticle = (text) => {
        const newArticles = [...articles];
        const articleIndex = newArticles.findIndex((article) => article.Text === text);
        newArticles.splice(articleIndex, 1); // Elimina el artículo en la posición encontrada
        saveArticle(newArticles);
    };
    const addArticle = (text) => {
        const newArticles = [...articles];
    
        newArticles.push({
            Text:text,
            completed: false,
        });
        saveArticle(newArticles);
    };
    return (
        <ComponentContext.Provider value={{
            loading,
            error,
            completedArticle,
            totalArticle,
            searchValue,
            searchArticles,
            setSearchValue,
            complidArticle,
            deleteArticle,
            openModal,
            setOpenModal,
            addArticle,
        }}>
            {children}
        </ComponentContext.Provider>
    );

}
export { ComponentContext, ComponentProvider };