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
            setTimeout(() => { 
                // props.setSearchState("searching");
                
                const searchSuccess = true;
                if(searchSuccess){
                    props.setData({"pregunta": event.target.value, "respuesta": `Respuesta a  ${event.target.value}!`, "url_imagen": "test_image.jpeg"})
                }else{
                    props.setData({"pregunta": "Ocurrio un error por favor intenta de nuevo", "respuesta": "Si el error persiste comunicate con dsandovalai@gmail.com", "url_imagen": ""})
                }
                setLoading(false);
                props.setSearchState("unfocused");
            }, 2000);
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
                            <input onKeyDown={handleKeyPress} onFocus={onFocus} onBlur={onBlur} type="text" id="autocomplete-input" className="autocomplete" />
                            <label for="autocomplete-input">search the best</label>
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