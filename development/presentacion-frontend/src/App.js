import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import ShowContent from './components/ShowContent.jsx';
import ShowSearching from './components/ShowSearching.jsx';
import ShowFocused from './components/ShowSearchFocus.jsx';



import {useState, useEffect} from 'react';

function App() {
  const [searchState, setSearchState] = useState("unfocused"); // unfocused, searching, focused
  const [data, setData] = useState({pregunta: "pregunta", 
                                    respuesta:"respuesta",
                                     url_imagen: "test_image.jpeg"}); // unfocused, searching, focused

  return (
    <div className="">
      <header className="">
        <SearchBar setSearchState={setSearchState} setData={setData}/>
        {
          searchState === "unfocused" 
          ?
          <ShowContent data={data}/>
          : searchState === "searching"
          ? <ShowSearching/>
          : searchState === "focused"
          ? <ShowFocused/> : "hubo un error"
        }
        
      </header>
    </div>
  );
}

export default App;
