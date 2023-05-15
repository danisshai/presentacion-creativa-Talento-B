// Search-bar component
// this is a search bar that uses materializecss to look good, it has full widht and a placeholder
// it also has a handleSearch function that is passed as a prop from the parent component
// it is used to filter the data in the table
// it has a state that is used to store the value of the input
// it has a function that is called when the input changes, it updates the state
// it has a function that is called when the form is submitted, it calls the handleSearch function

import React, { Component, useState, useEffect} from 'react';
// import icons from materializecss



function SearchBar(props) {
    const [loading, setLoading] = useState(false)
    const onFocus = () => props.setSearchState("focused") // focused , searching
    const onBlur = () => {
        if(!loading){props.setSearchState("unfocused")}
    }
    const handleKeyPress = (event)=> {
        if(event.key === 'Enter'){
            // simulate searching api call
            setLoading(true);
            props.setSearchState("searching")
            const url = 'https://us-south.functions.appdomain.cloud/api/v1/web/e5f49dfa-6fd2-4847-81d9-7b2005be3699/default/presentacion_creativa_talento_B?texto='+event.target.value
            fetch(url)
                .then(response => response.json())
                .then(jsonData => {
                    props.setData({"pregunta": event.target.value, "respuesta": jsonData.respuesta, "url_imagen": jsonData.image})
                    setLoading(false);
                    props.setSearchState("unfocused");
                }).catch(error => {console.error(error);
                    props.setData({"pregunta": "Ocurrio un error por favor intenta de nuevo", "respuesta": "Si el error persiste comunicate con dsandovalai@gmail.com", "url_imagen": ""})
                    setLoading(false);
                });
           
            console.log('enter press here! ')
        }
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        {!loading?
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input autocomplete="off" onKeyDown={handleKeyPress} onFocus={onFocus} onBlur={onBlur} type="text" id="autocomplete-input" className="autocomplete" />
                            <label for="autocomplete-input">search the best</label>
                            <span > <a href="https://raw.githubusercontent.com/danisshai/presentacion-creativa-Talento-B/main/development/preguntas_sugeridas.pdf" target="_blank">Ejemplos (Capturas de pantalla) de respuesta a preguntas sugeridas</a> </span>
                        </div>:
                        <h6 className="center-align" >Buscando ...</h6>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;