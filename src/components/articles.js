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

import ArticleCard from "./articleCard.js";

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
          <ArticleCard article={course}></ArticleCard>
          // <li key={course.idArticle}>
          //   <p>{course.title}</p>
          //   <span>{course.preview }</span>
          // </li>
        )
      });
  }, []);


 var names = ['Jake', 'Jon', 'Thruster'];

//  if (array === undefined) {
//   return <>Still loading...</>;
//<a onClick={()=>handleClick(course.text)} style={{cursor: 'pointer'}}> {course.title}</a>
// }{
  return (
    <div className="App">

<table style={{
            width: "75%",
            display:"block",
            float:"left",
            marginLeft:"50px",
            marginTop:"75px"
          }}>

     
      { !data ? <p>"Loading..."</p> :  data.result.map(course => 
          <tr>
          <td style={{}} onClick={()=>handleClick(course.text)}>
            <ArticleCard  article={course}></ArticleCard>
            </td>
          </tr>
        )}
    </table>

    </div>

     
  )
//}

  
}

export default Articles;