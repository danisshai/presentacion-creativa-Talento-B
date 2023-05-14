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
        <div className="container valign center">
            <img src="loading.gif" alt="Loading"  style={{width:"100%", maxWidth: "300px"}}/>
          
            <h4>Dato Curioso: </h4>
            <p> Cuando estaba en septimo grado del colegio participe en una competencia de google llamada Google Code-In</p>
        </div>
    );
}

export default ShowSearching;