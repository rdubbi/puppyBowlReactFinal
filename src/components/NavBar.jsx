import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <>
      <div className="nav">
        <Link
          to="/"
          onClick={() => {
            window.reload();
          }}
        >
          <h2>All Players</h2>
        </Link>
        <Link to="/NewPlayerForm">
          <h2>Add Players</h2>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}
