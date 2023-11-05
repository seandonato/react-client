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


function Article({ text }) {

    const location = useLocation();


  return (

    <div className="App">
           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <div>{ <div dangerouslySetInnerHTML={{ __html: !location.state.text ? "loading" : location.state.text }} div/> }</div>
           </header>
         </div>
  )
}
export default Article;

// function Article(props) {


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <div>{ <div dangerouslySetInnerHTML={{ __html: props.text }} div/> }</div> */}
//       </header>
//     </div>
//   )

  
// }


