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
    // const [focused, setFocused] = useState(false)
    const onFocus = () => props.setSearchState("searching") // focused
    const onBlur = () => props.setSearchState("unfocused")
    const handleKeyPress = (event)=> {
        if(event.key === 'Enter'){
            // simulate searching api call
            setTimeout(() => { 
                console.log("hello again!"); 
            }, 2000);
            console.log('enter press here! ')
        }
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input onKeyDown={handleKeyPress} onFocus={onFocus} onBlur={onBlur} type="text" id="autocomplete-input" className="autocomplete" />
                            <label for="autocomplete-input">search the best</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;