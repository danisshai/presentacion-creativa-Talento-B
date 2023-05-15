// Search-bar component
// this is a search bar that uses materializecss to look good, it has full widht and a placeholder
// it also has a handleSearch function that is passed as a prop from the parent component
// it is used to filter the data in the table
// it has a state that is used to store the value of the input
// it has a function that is called when the input changes, it updates the state
// it has a function that is called when the form is submitted, it calls the handleSearch function

import React, { Component, useState, useEffect} from 'react';
// import icons from materializecss



function ShowSearching(props) {

    const datos_curiosos = ['Estuve en un curso intensivo presencial en Inglés, en el que vino a colombia la decana de la universidad de Stanford a enseñar ciencias de datos.', // rosa
                'Me gusta cocinar, y estuve trabajando durante una semana en una panaderia con mi tío.', // verde
                'Tengo 3 hermanos, soy el menor y nos llevamos de a 2 años cada uno.', // amarillo
                'En noveno grado del colegio hice un año de HomeSchooling.', // amarillo
                'Estoy aprendiendo Chino-Mandarin', // naranja
                'Hace poco la lider del proyecto de un semillero de analitica SEKIA, me pidio ayuda para codirigir  y liderar el grupo.',
                'Me gusta hacer trucos de magia, jugar baloncesto, y preparar cosas ricas.',
                'Conozco tecnologías de desarrollo web como ReactJS, Node, Django, HTML, CSS, y JavaScript.',
                'La clase de la universidad que más me ha gustado es la de Introducción a la Ciencia de Datos, con Lucy Jimenez. Es una super profe.',
                "Cuando estaba en HomeSchooling participe en una competencia de google llamada Google Code-In"
            ];

    const dato = datos_curiosos[Math.floor(Math.random() * datos_curiosos.length)];


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
        <div className="container valign center" >
            <img src="loading.gif" alt="Loading"  style={{width:"100%", maxWidth: "300px"}}/>
          
            <h4 style={{fontWeight:"800"}}>Dato Curioso: </h4>
            <p style={{fontWeight:"600"}}> {dato} </p>
        </div>
    );
}

export default ShowSearching;