import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import ShowContent from './components/ShowContent.jsx';
import ShowSearching from './components/ShowSearching.jsx';
import ShowFocused from './components/ShowSearchFocus.jsx';



import {useState, useEffect} from 'react';

function App() {
  const [searchState, setSearchState] = useState("unfocused"); // unfocused, searching, focused

  return (
    <div className="">
      <header className="">
        <SearchBar setSearchState={setSearchState}/>
        {
          searchState === "unfocused" 
          ?
          <ShowContent/>
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
