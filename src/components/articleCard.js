import React, { Component } from "react";
import logo from "../logo.svg";
import img from "../code.png";
import Nav from "../components/nav.js";
import { useParams } from "react-router-dom";

import "../App.css";
import { BrowserRouter } from 'react-router-dom';
import DOMPurify from "dompurify";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

// class Article extends Component {   

//   constructor(props){   
//     super(props);   
//     //console.log(props.text)
//     console.log(this.props);

//     this.state = {
//         data : props.data
//     }



//     // var location = useLocation();
//     // var data = location.state?.data;

//     //this.state.text = "test"
//     //console.log(props.text)

//     // this.state = { text: this.props.text };
// }   
//   handleEvent = () => {   
//     console.log(this.props);   
//   }   
//   render(text) {   
//     //console.log(text)
//     return (   
//         <div className="App">
//               <header className="App-header">
//                  <img src={logo} className="App-logo" alt="logo" />
//                  {/* <div>{ <div dangerouslySetInnerHTML={{ __html: this.state.text }} div/> }</div> */}
//                </header>
//                <p>{}</p>
//              </div> 
//     );   
//   }   
// }   


function ArticleCard({ article }) {

    return (

        //<li>
        <div
          className="article-card"
          style={{
            align: "left",
            border: "solid 2px #d3d3d3",
            borderRadius: "8px",
            width:"200px",
            margin: "10px auto",
            listStyleType: "none",
            float:"left",
            paddingLeft:"16px",
            paddingTop:"16px",
            paddingRight:"16px",
            paddingBottom:"16px",
            verticalAlign:"middle",
            textAlign:"left"
        
          }}
        >
        
          <p style={{fontSize:"24px",textAlign:"left",width:"100%",margin:"2px",float:"left"}}>{article.title}</p>


          <p style={{textAlign:"left",width:"100%",margin:"2px",float:"left"}}>{article.date}</p>

          <p style={{textAlign:"left",width:"100%",margin:"2px",float:"left"}}>{article.preview}</p>
        </div>
     // </li>
  )
}


export default ArticleCard;
