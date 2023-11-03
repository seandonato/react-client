import React from "react";
import logo from "../logo.svg";
import img from "../code.png";

import "../App.css";
import { BrowserRouter } from 'react-router-dom';
import DOMPurify from "dompurify";

function ArticleItem(title){
  return (
    <div >
      
    </div>
  );
}

function Articles() {
  const [data, setData] = React.useState(null);

  var array;
  React.useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data)
        array = data.result
      });
  }, []);

  //var dataParse = JSON.parse(data)
  var myJSON = JSON.stringify(data);
  var result = JSON.parse(myJSON);
  //var r = result["result"]
  //"]
 //var e = data.result[0]
  //var myJSONR = JSON.stringify(data.result)

  //var rows = data["articles"]
  console.log(result)
  //console.log(e)


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
      <ul>
          {names.map(function(name, index){
              return <li key={ index }>{name}</li>;
            })}
      </ul>
    </div>
     
  )
//}

  
}

export default Articles;