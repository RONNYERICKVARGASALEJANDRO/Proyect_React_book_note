import { CompTitle } from '../component/CompTitle';
import { CompSearch } from '../component/CompSearch';
import { CompList } from '../component/CompList';
import { CompItems } from '../component/CompItems';
import { CompButtonCreate } from '../component/CompButtonCreate';
import { ArticleLoading } from '../component/articleLoading';
import { ArticleEmpy } from '../component/articleEmpy';
import { ArticleError } from '../component/articleError';
import { ComponentContext } from '../component/componentContext';
import { Modal } from '../Modal';
import { FormAddArticle } from '../Modal/formAddArticle';
import React from 'react';

function AppUI() {
    const { loading,
        error,
        searchArticles,
        complidArticle,
        deleteArticle,
        openModal,
        setOpenModal,
    } = React.useContext(ComponentContext)
    return (
        <>
            <div className='App'>
                <CompTitle />
                <CompSearch
                />
                <CompList>
                    {loading && <ArticleLoading />}
                    {error && <ArticleError />}
                    {(!loading && searchArticles.length === 0) && <ArticleEmpy />}

                    {searchArticles.map(comp => (
                        <CompItems
                            key={comp.Text}
                            text={comp.Text}
                            completed={comp.completed}
                            onComplid={() => complidArticle(comp.Text)}
                            onDelete={() => deleteArticle(comp.Text)}
                        />
                    ))}
                </CompList> 
                <CompButtonCreate setOpenModal={setOpenModal}/>
                {openModal && (
                    <Modal>
                        <FormAddArticle setOpenModal={setOpenModal}></FormAddArticle>
                    </Modal>
                )}


            </div>
        </>
    );

}


export { AppUI };


