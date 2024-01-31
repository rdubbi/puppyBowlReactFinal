import MainContainer from "./components/MainContainer";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (newSearchText) => {
    setSearchText(newSearchText);
  };

  return (
    <>
      <Router>
        <h1>PUPPY BOWL</h1>
        <Navbar onSearch={handleSearch} />
        <MainContainer searchText={searchText} />
      </Router>
    </>
  );
}

export default App;
