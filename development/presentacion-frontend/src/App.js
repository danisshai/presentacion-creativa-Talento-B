import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import ShowContent from './components/ShowContent.jsx';
import ShowSearching from './components/ShowSearching.jsx';
import ShowFocused from './components/ShowSearchFocus.jsx';



import {useState, useEffect} from 'react';

function App() {
  const [result, setResult] = useState("unfocused");
  

  const [searchState, setSearchState] = useState("unfocused"); // unfocused, searching, focused
  const [data, setData] = useState({pregunta: "Bienvenid@ - Realiza tu pregunta para mí en la barra de busqueda y presiona enter", 
                                    respuesta:"Por medio inteligencia artificial intentaré responder de la mejor manera a tus preguntas. Tengo información sobre mi familia, mis gustos, mi infancia, mis metas, proyeccion profesional en Bancolombia y más.",
                                     url_imagen: "imagenInicial.jpeg"}); // unfocused, searching, focused

  return (
    <div className="">
      <header className="">
        <SearchBar setSearchState={setSearchState} setData={setData}/>
        
        {
          searchState === "unfocused" 
          ? <ShowContent data={data}/>
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
