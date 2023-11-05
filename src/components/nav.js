import React from "react";
import logo from "../logo.svg";
import "./nav.css";

import { BrowserRouter } from 'react-router-dom';

function Nav() {

  return (
    <nav class="Nav" ><a class="active left" id="coad" href="#coad" >Sean Donato</a><a href="/about">About</a><a href="/articles">Posts</a>
</nav>
  );
}

export default Nav;