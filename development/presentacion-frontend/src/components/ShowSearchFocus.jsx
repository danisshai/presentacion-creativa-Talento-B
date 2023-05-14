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
            <h6> <strong> Perguntame algo que te interese:</strong></h6>
        </div>
    );
}

export default ShowSearchFocus;