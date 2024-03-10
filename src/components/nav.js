import React from "react";
import logo from "../logo.svg";
import "./nav.css";
//import mobile from  {process.env.PUBLIC_URL + '/mobileWithText.png'};

import { BrowserRouter } from 'react-router-dom';

function Nav() {

  return (
    
//     <ul class="Nav" > 
//       <ul  display="flex"
//  >
//         <li display="block" float="left"><img src={process.env.PUBLIC_URL + '/mobileWithText.png'} className="mobile" alt="mobile" /></li>
//         <li display="block" ><a class="active left" id="coad" href="#coad" >Sean Donato</a></li>
//       </ul>

//       <a href="/about">About</a>
//       <a href="/articles">Posts</a>
//     </ul>

    <nav class="Nav" > 
      <img class= "img" id="img" src={process.env.PUBLIC_URL + '/mobileWithText.png'} className="mobile" alt="mobile" float="left"/>
      <a class="active left" id="coad" href="#coad" >Sean Donato</a>
      <a href="/about">About</a>
      <a href="/articles">Posts</a>
    </nav>
  );
}

export default Nav;