import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Project from "./projects/Project";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";


function App() {
  return (
      <div>
          <Header/>
          <Main/>
          <Skills/>
          <Project/>
          <Contacts/>
          <Footer/>

      </div>
  );
}

export default App;
