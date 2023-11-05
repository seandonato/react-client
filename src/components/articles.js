import React from "react";
import logo from "../logo.svg";
import img from "../code.png";
import Nav from "../components/nav.js";
import Article from "./article.js";

import "../App.css";
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'


import DOMPurify from "dompurify";

function ArticleItem(title){
  return (
    <div >
      
    </div>
  );
}


function Articles() {
  const navigate = useNavigate();
  function handleClick(text){
  
    navigate('/Article',{state:{text:text}});
  
  }
//   const toArticle=(text)=>{
// navigate('/Article',{state:{text:text}});
//   }
  const [data, setData] = React.useState(null);
  var liste_album;
  var array;
  let arrayDataItems;
  React.useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data)
        array = data.result
         arrayDataItems = data.result.map(course => 
          <li key={course.idArticle}>
            <p>{course.title}</p>
            <span>{course.preview }</span>
          </li>
        )
      
      });
  }, []);


 var names = ['Jake', 'Jon', 'Thruster'];

//  if (array === undefined) {
//   return <>Still loading...</>;
// }{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{!data ? <p>"Loading..."</p> : <div dangerouslySetInnerHTML={{ __html: data.result[0].text }} div/> }</div>
      </header>

      { !data ? <p>"Loading..."</p> :  data.result.map(course => 
          <li key={course.idArticle}>
            <p>{course.title}</p>
            <a>{course.title}</a>

            <button onClick={()=>handleClick(course.text)}>More</button>

           


          </li>
        )}
    </div>
     
  )
//}

  
}

export default Articles;