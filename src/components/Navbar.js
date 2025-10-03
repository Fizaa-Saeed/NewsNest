import React from "react";

export default function Navbar({ setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        <button
          className="navbar-brand text-blue fw-bold border-0 bg-transparent"
          onClick={() => setCategory("general")}
        >
          NewsNest 📜
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("general")}>General</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("business")}>Business</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("entertainment")}>Entertainment</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("science")}>Science</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("suport")}>Suport</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("technology")}>Technology</button></li>
            <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => setCategory("health")}>Health</button></li>
          </ul>

          <form className="d-flex" role="search">
            <button className="btn btn-brown" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}