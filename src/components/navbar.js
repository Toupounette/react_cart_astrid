// import React, { Component } from "react";
import React from "react";

const NavBar = ({ totalArticlesList }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#top">
          Navbar #
          <span className="badge badge-pill badge-secondary">
            {totalArticlesList}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;