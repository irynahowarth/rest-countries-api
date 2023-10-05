import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        Where in the world?
      </Link>
      <a href="">Dark Mode</a>
    </header>
  );
}
