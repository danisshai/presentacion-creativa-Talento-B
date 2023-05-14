// Search-bar component
// this is a search bar that uses materializecss to look good, it has full widht and a placeholder
// it also has a handleSearch function that is passed as a prop from the parent component
// it is used to filter the data in the table
// it has a state that is used to store the value of the input
// it has a function that is called when the input changes, it updates the state
// it has a function that is called when the form is submitted, it calls the handleSearch function

import React, { Component, useState, useEffect} from 'react';
// import icons from materializecss




function ShowContent(props) {
    const colores = ['rgb(248,182,204)', // rosa
                'rgb(0,195,124)', // verde
                'rgb(254,217,80)', // amarillo
                'rgb(254,217,80)', // amarillo
                'rgb(225,126,77)', // naranja
            ];

    const color = colores[Math.floor(Math.random() * colores.length)];

    return (
        <div className="row fade-in-image">
            <div className="col s12 m6 " >
              <img src={props.data.url_imagen} className="animate-image" alt="imagen"  style={{width:"100%"}}/>
            </div>
            <div className="col s12 m6 " style={{background: color}} >
              <h5 style={{fontWeight : "900"}}>{props.data.pregunta}</h5 >
              <p> <strong> {props.data.respuesta}</strong></p>
            </div>
          </div>
    );
}

export default ShowContent;