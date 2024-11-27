import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow rounded p-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Songs
          </Link>
          <Link className="navbar-brand" to="/playlist">
            Playlists
          </Link>
          <Link className="navbar-brand" to="/add-musicas">
            Add Song
          </Link>
          <Link className="navbar-brand" to="/add-playlist">
            Add Playlists
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
