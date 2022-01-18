import React from 'react';
import './App.css';
import Header from "./Componets/Header/Header";
import Bloc1 from "./Componets/Bloc-1/Bloc-1";
import Bloc2 from "./Componets/Bloc-2/Bloc-2";
import Bloc3 from './Componets/Bloc-3/Bloc-3';
import Bloc4 from './Componets/Bloc-4/Bloc-4';
import Bloc5 from './Componets/Bloc-5/Bloc-5';
import Footer from "./Componets/Footer/Footer";

function App() {
  return (
      <div>
          <Header/>
          <Bloc1/>
          <Bloc2/>
          <Bloc3/>
          <Bloc4/>
          <Bloc5/>
          <Footer/>
      </div>
  );
}

export default App;
