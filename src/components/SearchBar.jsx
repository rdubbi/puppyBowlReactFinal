import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [localSearchText, setLocalSearchText] = useState("");

  const handleInputChange = (e) => {
    const newSearchText = e.target.value;
    setLocalSearchText(newSearchText);
    onSearch(newSearchText);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pup Name!..."
        value={localSearchText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
