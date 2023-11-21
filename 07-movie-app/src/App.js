import React, { useState } from "react";
import Search from "./Components/Search";
import Axios from "axios";
import Results from "./Components/Results";
import Popup from "./Components/Popup";

function App() {
  const [input, changeInput] = useState("");
  const [movies, updateMovies] = useState([]);
  const [popupData, updatePopupData] = useState(null);

  const apiKey = "http://www.omdbapi.com/?apikey=51dd3a3a";

  const MakeApiCall = async title => {
    const res = await Axios.get(apiKey + "&s=" + title);
    updateMovies(res.data.Search);
  };

  const MakeApiCallWithID = async id => {
    const res = await Axios.get(apiKey + "&i=" + id);
    updatePopupData(res.data);
  };

  const handleInputChange = e => {
    changeInput(e.target.value);
  };

  const handleSearch = e => {
    if (e.key === "Enter") {
      MakeApiCall(input);
    }
  };

  const openPopup = id => {
    MakeApiCallWithID(id);
  };

  const closePopup = () => {
    updatePopupData(null);
  };

  return (
    <div className="App">
      <header>
        <h1>Movies Database</h1>
      </header>
      <main>
        <Search
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <Results results={movies} openPopup={openPopup} />
      </main>
      {popupData === null ? (
        <></>
      ) : (
        <Popup selected={popupData} closePopup={closePopup} />
      )}
    </div>
  );
}

export default App;
