import React from "react";

import logo from './logo.svg';
import './App.css';
import Articles from "./components/articles.js";

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Home() {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<Articles/>} />
      </Routes>
    </>

  );
}
export default App;
