import { Link } from "react-router-dom";
import React, { Component }  from 'react';

function Nav() {
  return (
    <div>
      <Link to="/">Labs</Link> |
      <Link to="/hello">Hello</Link> |
      <Link to="/tuiter/explore">Tuiter - Explore</Link> |
      <Link to="/tuiter/home">Tuiter - Home [Challenge]</Link>
    </div>
  );
}

export default Nav;
