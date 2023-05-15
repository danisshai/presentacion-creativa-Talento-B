// Search-bar component
// this is a search bar that uses materializecss to look good, it has full widht and a placeholder
// it also has a handleSearch function that is passed as a prop from the parent component
// it is used to filter the data in the table
// it has a state that is used to store the value of the input
// it has a function that is called when the input changes, it updates the state
// it has a function that is called when the form is submitted, it calls the handleSearch function

import React, { Component, useState, useEffect} from 'react';
// import icons from materializecss



function ShowSearchFocus(props) {
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    
    // useEffect onFocus    
    useEffect(() => {
        if(focused){
            console.log("focused");
        }else{
            console.log("not focused");
        }
      },[onFocus]);
    
    // useEffect onBlur
    return (
        <div className="container" >
            <h6> <strong> Realiza tu pregunta para mí en la bara de busqueda y presiona enter </strong></h6>
            <p>  Por medio inteligencia artificial intentaré responder de la mejor manera a tus preguntas sobre mí. Tengo información sobre mi familia, mis gustos, mi infancia, mis metas, proyeccion profesional en Bancolombia y más. </p>
            <ul>
                <li> -  ¿Cuéntanos quienes conforman tu familia y qué es lo que más te gusta de ella? </li>
                <li> -  ¿Qué te motivó a postularte a Talento B?  </li>
                <li> -  ¿Cual es tu proyección profesional dentro de la organización (¿qué cargos te gustaría desempeñar en un futuro?)  </li>
            </ul>
        </div>
    );
}

export default ShowSearchFocus;